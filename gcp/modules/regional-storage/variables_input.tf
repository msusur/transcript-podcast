variable "bucket_name" {
  type        = "string"
  description = "The name of the containing bucket"
}

variable "region" {
  type    = "string"
  default = "europe-west2"
}

variable "project_id" {
  type    = "string"
  default = "The id of the project that the storage is going to be created."
}
