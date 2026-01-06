terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.0"
    }
  }
  required_version = ">= 1.0"
}

provider "azurerm" {
  features {}
}

# Variables
variable "location" {
  description = "Azure region"
  default     = "West Europe"
}

variable "environment" {
  description = "Environment name"
  default     = "prod"
}

variable "project_name" {
  description = "Project name"
  default     = "cyber-ssi"
}

# Resource Group
resource "azurerm_resource_group" "main" {
  name     = "rg-${var.project_name}-${var.environment}"
  location = var.location

  tags = {
    Environment = var.environment
    Project     = var.project_name
    ManagedBy   = "Terraform"
  }
}

# Static Web App (for Next.js static export)
resource "azurerm_static_web_app" "main" {
  name                = "swa-${var.project_name}-${var.environment}"
  resource_group_name = azurerm_resource_group.main.name
  location            = var.location
  sku_tier            = "Free"
  sku_size            = "Free"

  tags = {
    Environment = var.environment
    Project     = var.project_name
  }
}

# Application Insights for monitoring
resource "azurerm_application_insights" "main" {
  name                = "appi-${var.project_name}-${var.environment}"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  application_type    = "web"

  tags = {
    Environment = var.environment
    Project     = var.project_name
  }
}

# Storage Account for logs and backups
resource "azurerm_storage_account" "main" {
  name                     = "st${replace(var.project_name, "-", "")}${var.environment}"
  resource_group_name      = azurerm_resource_group.main.name
  location                 = azurerm_resource_group.main.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
  min_tls_version          = "TLS1_2"

  blob_properties {
    versioning_enabled = true

    delete_retention_policy {
      days = 30
    }
  }

  tags = {
    Environment = var.environment
    Project     = var.project_name
  }
}

# Storage container for contact form submissions (as backup)
resource "azurerm_storage_container" "submissions" {
  name                  = "contact-submissions"
  storage_account_id    = azurerm_storage_account.main.id
  container_access_type = "private"
}

# Outputs
output "static_web_app_url" {
  value       = azurerm_static_web_app.main.default_host_name
  description = "Static Web App URL"
}

output "static_web_app_api_key" {
  value       = azurerm_static_web_app.main.api_key
  sensitive   = true
  description = "Static Web App deployment token"
}

output "application_insights_key" {
  value       = azurerm_application_insights.main.instrumentation_key
  sensitive   = true
  description = "Application Insights instrumentation key"
}

output "storage_account_name" {
  value       = azurerm_storage_account.main.name
  description = "Storage account name"
}

output "resource_group_name" {
  value       = azurerm_resource_group.main.name
  description = "Resource group name"
}
