f3m
===

A frontmatter based markdown manager.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/f3m.svg)](https://npmjs.org/package/f3m)
[![Downloads/week](https://img.shields.io/npm/dw/f3m.svg)](https://npmjs.org/package/f3m)
[![License](https://img.shields.io/npm/l/f3m.svg)](https://github.com/wuxiaobai24/f3m/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g f3m
$ f3m COMMAND
running command...
$ f3m (-v|--version|version)
f3m/0.0.1 linux-x64 node-v12.16.3
$ f3m --help [COMMAND]
USAGE
  $ f3m COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`f3m add`](#f3m-add)
* [`f3m help [COMMAND]`](#f3m-help-command)

## `f3m add`

Add post(s)

```
USAGE
  $ f3m add

OPTIONS
  -p, --path=path       input directory (default is ".")
  -t, --type=yaml|json  frontmatter type(default is yaml)

DESCRIPTION
  ...
  parse post frontmatter into database.
```

_See code: [src/commands/add.js](https://github.com/wuxiaobai24/f3m/blob/v0.0.1/src/commands/add.js)_

## `f3m help [COMMAND]`

display help for f3m

```
USAGE
  $ f3m help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.1.0/src/commands/help.ts)_
<!-- commandsstop -->
