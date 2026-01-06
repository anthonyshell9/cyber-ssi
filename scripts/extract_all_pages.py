#!/usr/bin/env python3
"""
Extract all page content from WordPress database dump
"""
import re
import json
import html
from pathlib import Path

DB_FILE = "/Users/anthonyhassen/Downloads/OneDrive_1_1-6-2026/backup_2025-12-07-0221_CyberSSI_18b2fe4c33da-db"
OUTPUT_DIR = Path("/Users/anthonyhassen/cyber-ssi/content/pages")

def clean_divi_content(content):
    """Remove Divi shortcodes and extract text content"""
    # Remove Divi module tags
    content = re.sub(r'\[/?et_pb_[^\]]*\]', '', content)
    # Remove WordPress comments
    content = re.sub(r'<!--.*?-->', '', content, flags=re.DOTALL)
    # Decode HTML entities
    content = html.unescape(content)
    # Clean up whitespace
    content = re.sub(r'\n\s*\n', '\n\n', content)
    return content.strip()

def extract_text_from_divi(content):
    """Extract readable text from Divi content"""
    # Find all text blocks
    texts = []

    # Extract headings
    h_pattern = r'<h([1-6])[^>]*>(.*?)</h\1>'
    for match in re.finditer(h_pattern, content, re.DOTALL):
        level, text = match.groups()
        text = re.sub(r'<[^>]+>', '', text)  # Remove HTML tags
        text = html.unescape(text.strip())
        if text:
            texts.append(f"H{level}: {text}")

    # Extract paragraphs
    p_pattern = r'<p[^>]*>(.*?)</p>'
    for match in re.finditer(p_pattern, content, re.DOTALL):
        text = match.group(1)
        text = re.sub(r'<[^>]+>', '', text)  # Remove HTML tags
        text = html.unescape(text.strip())
        if text and len(text) > 20:  # Skip very short paragraphs
            texts.append(f"P: {text}")

    # Extract list items
    li_pattern = r'<li[^>]*>(.*?)</li>'
    for match in re.finditer(li_pattern, content, re.DOTALL):
        text = match.group(1)
        text = re.sub(r'<[^>]+>', '', text)
        text = html.unescape(text.strip())
        if text:
            texts.append(f"- {text}")

    return texts

def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    print("Reading database dump...")
    with open(DB_FILE, 'r', encoding='utf-8', errors='ignore') as f:
        db_content = f.read()

    # Target pages to extract
    target_pages = [
        'accueil', 'vos-besoins', 'nos-services', 'entreprise', 'contact', 'faq',
        'nos-realisations', 'gouvernance-risque-conformite', 'mise-en-conformite-reglementaire',
        'nis2', 'mise-en-conformite-dora', 'iso-27001', 'iso-iec-42001', 'ai-act', 'vara',
        'conseils-et-audits', 'amelioration-de-la-maturite-cyber', 'evaluer-votre-posture-de-securite',
        'due-diligence', 'rssi-a-temps-partage', 'services-operationnels', 'test-dintrusion',
        'red-team', 'audit-de-code', 'audit-de-configuration',
        'securite-des-infrastructures-azure-office-365-et-intune',
        'securite-des-services-dannuaire', 'securite-iot', 'securite-robotique',
        'gestion-des-vulnerabilites', 'support-a-la-remediation-dincidents', 'soc-essential',
        'english', 'lentreprise'
    ]

    pages_data = {}

    for slug in target_pages:
        print(f"Extracting: {slug}")

        # Pattern to find the page content by slug
        # Looking for pattern: ... 'slug', ... in wp_posts
        pattern = rf"'({slug})',\s*'',\s*'',\s*'\d+',\s*'https?://[^']*',\s*'\d+',\s*'(page|post)'"

        # Search around the slug for content
        slug_pos = db_content.find(f"'{slug}'")
        if slug_pos == -1:
            print(f"  Not found: {slug}")
            continue

        # Get context around the slug (the INSERT statement)
        start = max(0, slug_pos - 50000)
        end = min(len(db_content), slug_pos + 5000)
        context = db_content[start:end]

        # Find the content field (4th field after date fields)
        # Pattern: post_content is between post_date_gmt and post_title
        content_match = re.search(
            rf"'\d{{4}}-\d{{2}}-\d{{2}} \d{{2}}:\d{{2}}:\d{{2}}', '(.*?)', '([^']*)', ''",
            context[slug_pos-start-1000:slug_pos-start+100],
            re.DOTALL
        )

        if content_match:
            raw_content = content_match.group(1)
            title = content_match.group(2)
        else:
            # Try another pattern
            raw_content = ""
            title = slug.replace('-', ' ').title()

        # Extract meaningful text
        texts = extract_text_from_divi(raw_content) if raw_content else []

        pages_data[slug] = {
            'slug': slug,
            'title': title,
            'raw_length': len(raw_content) if raw_content else 0,
            'extracted_texts': texts[:20]  # First 20 text blocks
        }

    # Save extracted data
    output_file = OUTPUT_DIR / 'all_pages.json'
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(pages_data, f, indent=2, ensure_ascii=False)

    print(f"\nExtracted {len(pages_data)} pages to {output_file}")

    # Print summary
    for slug, data in pages_data.items():
        print(f"  {slug}: {data['raw_length']} bytes, {len(data['extracted_texts'])} text blocks")

if __name__ == '__main__':
    main()
