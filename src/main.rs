#![allow(unused)]
use clap::{Parser, Subcommand};

#[derive(Parser)]
#[clap(name = "oa2ts")]
#[clap(about = "Convert OpenAPI Spec to TypeScript Code", long_about = None)]
#[clap(propagate_version = true)]
struct Cli {
	#[clap(subcommand)]
	commands: Commands
}

#[derive(Subcommand)]
enum Commands {
	/// Adds files to myapp
	import {
		/// Path to output the code
		#[clap(parse(from_os_string))]
		output: String,
		/// Path to the spec file. Can be YAML or JSON.
		file: String,
		/// URL to the spec. Can be YAML or JSON.
		url: String,
		/// Format to the spec. Can be YAML or JSON.
		format: String
	},
}

fn main() {
		let args = Cli::parse();
}
