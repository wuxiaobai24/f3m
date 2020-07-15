const { Command, flags } = require("@oclif/command");

const { db, Config, defaultConfig } = require("../lib/db");

class ConfigCommand extends Command {
  static args = [{ name: "subcommand" }];
  async run() {
    const { args, flags } = this.parse(ConfigCommand);
    const subcommand = args.subcommand || "show";
    if (subcommand === "show") {
      this.show();
    } else if (subcommand === "set") {
      this.set(flags);
    } else if (subcommand === "reset") {
      this.reset()
    }
  }

  show() {
    console.log("Config is:", Config.value());
  }

  set(flags) {
    const frontmatter = flags.frontmatter || "yaml";
    const encoding = flags.encoding || "utf8";
    Config.assign({ frontmatter, encoding }).write();
    this.show();
  }

  reset() {
    db.set("config", defaultConfig).write();
    this.show()
  }
}

ConfigCommand.description = `Show and set config
...
f3m config set -f yaml -c utf8
f3m config show # or f3m config
`;

ConfigCommand.flags = {
  name: flags.string({ char: "n", description: "name to print" }),
  frontmatter: flags.string({
    char: "f",
    description: "set frontmatter type config",
  }),
  encoding: flags.string({ char: "e", description: "set encoding config" }),
};

module.exports = ConfigCommand;
