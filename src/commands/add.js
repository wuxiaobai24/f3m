const { Command, flags } = require("@oclif/command");

const fs = require("fs");
const join = require("path").join;
const matter = require("gray-matter");
const { db, Post } = require("../lib/db");

class AddCommand extends Command {
  async run() {
    const { flags } = this.parse(AddCommand);
    const path = flags.path || ".";
    // const type = flags.type || "yaml";

    console.log("path is", path);
    db.set("path", path).write();
    this.add(path);
  }

  async add(path) {
    fs.stat(path, (err, stats) => {
      if (stats.isDirectory()) {
        fs.readdir(path, {}, (err, files) => {
          if (err) {
            console.log(err);
            return;
          }
          files.forEach((file) => this.add(join(path, file)));
        });
      } else {
        const data = matter.read(path);
        Post.push({
          path,
          matter: data.data,
        }).write();
      }
    });
  }
}

AddCommand.description = `Add post(s)
...
parse post frontmatter into database.
`;

AddCommand.flags = {
  path: flags.string({
    char: "p",
    description: 'input directory (default is ".")',
    required: false,
  }),
  // type: flags.string({
  //   char: "t",
  //   description: "frontmatter type(default is yaml)",
  //   required: false,
  //   options: ["yaml", "json"],
  // }),
};

module.exports = AddCommand;
