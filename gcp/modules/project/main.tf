resource "random_id" "id" {
  byte_length = 2
  prefix      = "${var.project_name}-"
}

resource "google_project" "project" {
  name            = "${var.project_name}"
  project_id      = "${random_id.id.hex}"
  billing_account = "${var.billing_account}"
  org_id          = "${var.org_id}"
}

resource "google_project_services" "project" {
  project = "${google_project.project.project_id}"

  services = [
    "compute.googleapis.com",
    "speech.googleapis.com",
    "storage-component.googleapis.com",
    "storage-api.googleapis.com",
    "cloudfunctions.googleapis.com",
    "oslogin.googleapis.com",
    "pubsub.googleapis.com",
    "logging.googleapis.com",
  ]
}
