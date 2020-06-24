module "transcription-platform-alfa-project" {
  source          = "../../modules/project"
  project_name    = "transcription-plat-alfa"
  region          = "europe-west2"
  billing_account = "01A02A-89ACC9-FF2828"
  org_id          = "308808081516"
}

module "file-upload-bucket" {
  source      = "../../modules/regional-storage"
  bucket_name = "sound-storage-bucket-alfa"
  region      = "europe-west2"
  project_id  = "${module.transcription-platform-alfa-project.project_id}"
}

module "mp3-reader-function" {
  source               = "../../modules/cloud-function"
  function_name        = "mp3-reader-function-alfa"
  function_entry_point = "convertToWav"
  region               = "europe-west1"
  bucket_name          = "mp3-reader-function-source"
  project_id           = "${module.transcription-platform-alfa-project.project_id}"
  trigger_resource     = "sound-storage-bucket-alfa"
  event_type           = "google.storage.object.finalize"
  source_directory     = "../../../packages/mp3-to-wav-function"
}
