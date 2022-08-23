# OpenAPI to TypeScript

Command-line utility for converting OpenAPI (formerly Swagger) definitions to TypeScript.

## Installation

WIP

## Usage

```
Usage: oa2ts <cmd> [args]

Commands:
  oa2ts import  Import OpenAPI specification and output TypeScript code

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]

```

### Available commands

### import

```
oa2ts import

Import OpenAPI specification and output TypeScript code

Options:
      --version  Show version number                                   [boolean]
      --help     Show help                                             [boolean]
      --file     Path to OpenAPI spec file. Can be either a JSON or YAML file.
                                                                        [string]
      --url      URL to remote OpenAPI spec file.                       [string]
  -o, --output   Location for the output.                               [string]
  -c, --config   Location for the config file.                          [string]
      --verbose  Shows verbose output                                  [boolean]

```
