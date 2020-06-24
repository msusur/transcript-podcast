resource "google_storage_bucket" "REGIONAL" {
  name          = "${var.bucket_name}"
  storage_class = "REGIONAL"
  location      = "${var.region}"
  project       = "${var.project_id}"
}
