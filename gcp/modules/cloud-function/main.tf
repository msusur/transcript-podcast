data "archive_file" "main" {
  type        = "zip"
  output_path = "${pathexpand("${var.source_directory}.zip")}"
  source_dir  = "${pathexpand("${var.source_directory}")}"
}

resource "google_storage_bucket" "main" {
  name          = "${var.bucket_name}"
  location      = "${var.region}"
  project       = "${var.project_id}"
  storage_class = "REGIONAL"
}

resource "google_storage_bucket_object" "main" {
  name                = "${basename(data.archive_file.main.output_path)}"
  bucket              = "${google_storage_bucket.main.name}"
  source              = "${data.archive_file.main.output_path}"
  content_disposition = "attachment"
  content_encoding    = "gzip"
  content_type        = "application/zip"
}

resource "google_cloudfunctions_function" "function" {
  name                = "${var.function_name}"
  description         = "${var.function_description}"
  available_memory_mb = "${var.function_memory}"
  timeout             = "${var.function_timeout}"
  entry_point         = "${var.function_entry_point}"
  region              = "${var.region}"
  project             = "${var.project_id}"
  runtime             = "${var.runtime}"

  source_archive_bucket = "${google_storage_bucket.main.name}"
  source_archive_object = "${google_storage_bucket_object.main.name}"

  event_trigger {
    event_type = "${var.event_type}"
    resource   = "${var.trigger_resource}"
  }
}
