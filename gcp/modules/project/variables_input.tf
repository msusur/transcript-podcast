variable "project_name" {
  type        = "string"
  description = "A user-defined name of the project"
}

variable "billing_account" {
  type        = "string"
  description = "The billing account that the project is going to be linked with."
}

variable "org_id" {
  type        = "string"
  description = "Organisation that the project is going to be created."
}

variable "region" {
  type    = "string"
  default = "europe-west2"
}
