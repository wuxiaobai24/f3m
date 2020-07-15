const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./db.json", {
  serialize: (data) => JSON.stringify(data),
  deserialize: (data) => JSON.parse(data),
});
const db = low(adapter);

const defaultConfig = {
  frontmatter: "yaml",
  encoding: "utf8",
};

db.defaults({ posts: [], config: defaultConfig }).write();

const Post = db.get("posts");
const Config = db.get("config");
module.exports = {
  db,
  Post,
  Config,
  defaultConfig,
};
