const questions = [
  {
    subject: "terraform",
    difficulty: "easy",
    question: "What is Terraform's primary purpose?",
    answer: "Its primary purpose in DevOps is to automate the infrastructure lifecycle, enabling teams to build, change, and version infrastructure safely and efficiently. It acts as a single tool to manage infrastructure across multiple cloud providers and on-premises data centers."
  },
  {
    subject: "terraform",
    difficulty: "easy",
    question: "Explain the difference between declarative and imperative IaC.",
    answer: "A declarative approach focuses on defining the desired end-state and Terraform figures out how to achieve it. An imperative approach defines step-by-step commands. Declarative IaC is simpler, more scalable, and better for long-term state management."
  },
  {
    subject: "terraform",
    difficulty: "easy",
    question: "How does Terraform differ from configuration management tools like Ansible?",
    answer: "Terraform is a provisioning tool used to create and manage infrastructure resources. Ansible is a configuration management tool used to install and manage software on servers. Terraform builds infrastructure, Ansible configures it."
  },
  {
    subject: "terraform",
    difficulty: "easy",
    question: "Explain the basic structure of a Terraform configuration file.",
    answer: "Terraform uses HCL, and the main blocks are provider, resource, variable, output, and module. Providers define cloud vendors, resources describe infrastructure, variables allow inputs, and outputs return useful values."
  },
  {
    subject: "terraform",
    difficulty: "easy",
    question: "What makes Terraform a cloud-agnostic tool?",
    answer: "Terraform uses provider plugins that translate Terraform configuration into API calls for AWS, Azure, GCP, and others. This enables a single IaC workflow for multiple clouds."
  },
  {
    subject: "terraform",
    difficulty: "easy",
    question: "What is Infrastructure as Code (IaC) and its main benefits?",
    answer: "IaC means managing infrastructure using code instead of manual processes. Benefits include automation, consistency, faster deployments, versioning, and reduced human errors."
  },
  {
    subject: "terraform",
    difficulty: "easy",
    question: "Describe the core Terraform workflow.",
    answer: "The workflow includes: Write → Plan → Apply. You write code in .tf files, generate an execution plan, and apply it to provision resources."
  },
  {
    subject: "terraform",
    difficulty: "easy",
    question: "What is the purpose of terraform init?",
    answer: "terraform init initializes the directory, downloads provider plugins, initializes the backend, and installs modules. It must be run before any other Terraform command."
  },
  {
    subject: "terraform",
    difficulty: "easy",
    question: "Explain what terraform plan does and why it's important.",
    answer: "terraform plan compares the desired configuration with the current state and shows what changes will happen. It prevents accidental or destructive changes by allowing review before applying."
  },
  {
    subject: "terraform",
    difficulty: "easy",
    question: "What is the difference between terraform apply and terraform apply tfplan?",
    answer: "terraform apply creates and applies a new plan. terraform apply tfplan applies a previously saved and approved plan, which is ideal for automation and CI/CD pipelines."
  },
  {
    subject: "terraform",
    difficulty: "easy",
    question: "Who are some key competitors of Terraform?",
    answer: "Key competitors include Ansible (for automation), AWS CloudFormation, Google Deployment Manager, and Azure ARM templates."
  },
  {
    subject: "terraform",
    difficulty: "easy",
    question: "What are the roles of terraform validate and terraform fmt?",
    answer: "terraform validate checks configuration syntax and logic. terraform fmt formats Terraform files into a standard style for readability."
  },
  {
    subject: "terraform",
    difficulty: "easy",
    question: "What is the purpose of the Terraform state file?",
    answer: "The state file stores infrastructure metadata and maps real resources to your configuration. It acts as the source of truth for Terraform operations."
  },
  {
    subject: "terraform",
    difficulty: "easy",
    question: "Why is storing state remotely a best practice?",
    answer: "Remote storage allows collaboration, state locking, encryption, versioning, and prevents corruption. Common backends include S3, Azure Blob, and Terraform Cloud."
  },
  {
    subject: "terraform",
    difficulty: "easy",
    question: "What is state locking and why is it important?",
    answer: "State locking prevents simultaneous operations on the same state file, avoiding corruption and race conditions when teams collaborate."
  },
  {
    subject: "terraform",
    difficulty: "easy",
    question: "How can you secure sensitive data within the Terraform state file?",
    answer: "Use remote backends with encryption, restrict IAM access, and store secrets in a secrets manager instead of hardcoding them in Terraform."
  },
  {
    subject: "terraform",
    difficulty: "easy",
    question: "How do you manage different environments like dev and prod?",
    answer: "Use separate state files, directories, workspaces, or .tfvars files. Parameterize your configuration using variables."
  },
  {
    subject: "terraform",
    difficulty: "easy",
    question: "What happens if you manually edit terraform.tfstate?",
    answer: "Editing the state manually can break Terraform, causing resource deletion or corruption. Always use terraform state subcommands instead."
  },
  {
    subject: "terraform",
    difficulty: "easy",
    question: "What are Terraform providers and resources?",
    answer: "Providers interact with cloud or service APIs. Resources are infrastructure objects Terraform manages, such as aws_instance or azurerm_storage_account."
  },
  {
    subject: "terraform",
    difficulty: "easy",
    question: "What are remote backends in Terraform?",
    answer: "Remote backends like S3 or Terraform Cloud store your state file centrally, enabling collaboration, state locking, and secure storage."
  },
  {
    subject: "terraform",
    difficulty: "easy",
    question: "Explain the difference between input variables and local variables.",
    answer: "Input variables take external values and parameterize configurations. Locals store computed values or reusable expressions within a module."
  },
  {
    subject: "terraform",
    difficulty: "easy",
    question: "What are common ways to assign values to Terraform variables?",
    answer: "Using CLI -var, variable definition files (.tfvars), and environment variables prefixed with TF_VAR_."
  },
  {
    subject: "terraform",
    difficulty: "easy",
    question: "What is the purpose of output values in Terraform?",
    answer: "Outputs expose resource attributes after apply and allow child modules to pass data to parent modules."
  },
  {
    subject: "terraform",
    difficulty: "easy",
    question: "What is a .tfvars file?",
    answer: "A .tfvars file stores variable values for different environments like dev or prod. Terraform automatically loads *.auto.tfvars files."
  },
  {
    subject: "terraform",
    difficulty: "easy",
    question: "What is a Terraform module and why is it used?",
    answer: "A module is a container for related resources. It organizes code, improves reusability, and enforces consistency across environments."
  },
  {
    subject: "terraform",
    difficulty: "easy",
    question: "How do you import existing infrastructure into Terraform?",
    answer: "Use terraform import to map an existing resource to the state, then manually write the configuration to match that resource."
  },
  {
    subject: "terraform",
    difficulty: "easy",
    question: "Describe the typical file structure of a Terraform module.",
    answer: "A module commonly includes main.tf, variables.tf, outputs.tf, and a README.md file."
  },
  {
    subject: "terraform",
    difficulty: "easy",
    question: "Can Terraform manage on-premises infrastructure?",
    answer: "Yes. Terraform supports on-prem through providers such as VMware, OpenStack, and custom providers."
  },
  {
    subject: "terraform",
    difficulty: "easy",
    question: "What is the difference between a root module and a child module?",
    answer: "The root module is the main config directory from where Terraform runs. Child modules are external modules called inside the root module."
  },
  {
    subject: "terraform",
    difficulty: "easy",
    question: "How can Terraform ignore duplicate resource errors?",
    answer: "Terraform can use the -ignore_duplicate flag during apply to bypass duplicate resource errors."
  },
  {
    subject: "terraform",
    difficulty: "easy",
    question: "Describe the components of Terraform architecture.",
    answer: "Terraform architecture consists of the CLI, Core engine, Providers, State file, and Modules."
  }
];
