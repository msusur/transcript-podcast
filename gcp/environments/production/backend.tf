terraform {
  backend "gcs" {
    bucket  = "mertsusur-terraform-admin"
    prefix  = "terraform/state"
    project = "mertsusur-terraform-admin"
  }
}
