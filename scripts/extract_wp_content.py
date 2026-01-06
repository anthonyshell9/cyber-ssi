#!/usr/bin/env python3
"""
Extract content from WordPress database dump for migration to Next.js
"""
import re
import json
import os
from pathlib import Path

DB_FILE = "/Users/anthonyhassen/Downloads/OneDrive_1_1-6-2026/backup_2025-12-07-0221_CyberSSI_18b2fe4c33da-db"
OUTPUT_DIR = Path("/Users/anthonyhassen/cyber-ssi/content")

def extract_posts():
    """Extract posts/pages from wp_posts table"""
    with open(DB_FILE, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()

    # Find wp_posts INSERT statements
    posts_pattern = r"INSERT INTO `wp_posts` VALUES \(([^;]+)\);"
    matches = re.findall(posts_pattern, content, re.DOTALL)

    posts = []
    for match in matches:
        # Parse the VALUES - this is simplified, real parsing would need proper SQL parsing
        rows = match.split('), (')
        for row in rows:
            row = row.strip('()')
            # Extract key fields using regex
            # Format: (ID, author, date, date_gmt, content, title, excerpt, status, ...)
            try:
                # Simple extraction - get post_title and post_content
                parts = row.split(", '")
                if len(parts) > 5:
                    post_id = parts[0].strip("(, ")
                    post_content = parts[4] if len(parts) > 4 else ""
                    post_title = parts[5].split("'")[0] if len(parts) > 5 else ""
                    post_status = parts[7].split("'")[0] if len(parts) > 7 else ""
                    post_name = parts[10].split("'")[0] if len(parts) > 10 else ""
                    post_type = parts[17].split("'")[0] if len(parts) > 17 else ""

                    if post_status == 'publish' and post_type in ['page', 'project']:
                        posts.append({
                            'id': post_id,
                            'title': post_title,
                            'slug': post_name,
                            'content': post_content[:500] + "..." if len(post_content) > 500 else post_content,
                            'type': post_type,
                            'status': post_status
                        })
            except Exception as e:
                continue

    return posts

def extract_with_grep():
    """Use simpler approach - grep for specific content"""
    import subprocess

    # Get published pages
    result = subprocess.run(
        ['grep', '-o', "'publish', 'closed', 'closed', '', '[^']*'", DB_FILE],
        capture_output=True, text=True
    )

    pages = []

    # Search for specific page titles we know exist
    known_pages = [
        'Accueil', 'Services', 'Contact', 'A propos', 'Mentions légales',
        'Politique de confidentialité', 'Réalisations', 'Blog'
    ]

    with open(DB_FILE, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()

    # Extract page titles and slugs
    pattern = r"\('(\d+)', '(\d+)', '[^']*', '[^']*', '([^']*)', '([^']*)', '[^']*', 'publish', '[^']*', '[^']*', '', '([^']*)',"

    for match in re.finditer(pattern, content):
        post_id, author, date, content_text, title = match.groups()[:5]
        pages.append({
            'id': post_id,
            'title': title,
        })

    return pages

def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    print("Extracting WordPress content...")

    # Read the DB file and extract key information
    with open(DB_FILE, 'r', encoding='utf-8', errors='ignore') as f:
        db_content = f.read()

    # Extract site options
    options = {}
    options_pattern = r"\((\d+), '([^']+)', '([^']*)', '(yes|no)'\)"
    for match in re.finditer(options_pattern, db_content):
        opt_id, opt_name, opt_value, autoload = match.groups()
        if opt_name in ['blogname', 'blogdescription', 'siteurl', 'home']:
            options[opt_name] = opt_value

    print(f"Site: {options.get('blogname', 'Unknown')}")
    print(f"URL: {options.get('siteurl', 'Unknown')}")

    # Save options
    with open(OUTPUT_DIR / 'site_options.json', 'w') as f:
        json.dump(options, f, indent=2)

    # Extract pages - look for post_type='page' with status='publish'
    pages = []

    # Pattern for wp_posts values
    # Looking for: ID, post_title, post_name (slug), post_content
    page_pattern = r"VALUES \((\d+), \d+, '[^']*', '[^']*', '([^']*)', '([^']*)', '[^']*', 'publish', 'closed', 'closed', '', '([^']*)',"

    for match in re.finditer(page_pattern, db_content):
        post_id, content, title, slug = match.groups()
        if title and slug:
            pages.append({
                'id': int(post_id),
                'title': title,
                'slug': slug,
                'content_preview': content[:200] if content else ''
            })

    # Sort by ID
    pages.sort(key=lambda x: x['id'])

    print(f"\nFound {len(pages)} published pages:")
    for page in pages[:20]:  # Show first 20
        print(f"  - {page['title']} (/{page['slug']})")

    # Save pages
    with open(OUTPUT_DIR / 'pages.json', 'w') as f:
        json.dump(pages, f, indent=2, ensure_ascii=False)

    # Extract projects (portfolio items)
    projects = []
    project_pattern = r"'project', '', \d+\).*?VALUES \((\d+), \d+, '[^']*', '[^']*', '([^']*)', '([^']*)',"

    print("\n✅ Content extracted to:", OUTPUT_DIR)

if __name__ == '__main__':
    main()
