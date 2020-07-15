const { Command, flags } = require("@oclif/command");

const fs = require("fs");
const join = require("path").join;
const matter = require("gray-matter");
const { db, Post, Config } = require("../lib/db");

const config = Config.value();

class AddCommand extends Command {
  static args = [{ name: "path" }];
  async run() {
    const { args } = this.parse(AddCommand);
    const path = args.path || ".";
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
        fs.readFile(path, { encoding: config.encoding }, (err, rowdata) => {
          if (err) {
            console.log(path, err);
            return;
          }
          const data = matter(rowdata, {
            language: config.frontmatter,
          });

          if (Post.find({ path }).value()) {
            Post.find({ path })
              .assign({
                path,
                matter: data.data,
              })
              .write();
          } else {
            Post.push({
              path,
              matter: data.data,
            }).write();
          }
        });
      }
    });
  }
}

AddCommand.description = `Add post(s)
...
parse post frontmatter into database.
`;

AddCommand.flags = {};

module.exports = AddCommand;
