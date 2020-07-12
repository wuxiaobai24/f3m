const low = require("lowdb")
const FileSync = require('lowdb/adapters/FileSync')



const adapter = new FileSync("./db.json", {
  serialize: (data) => JSON.stringify(data),
  deserialize: (data) => JSON.parse(data),
});
const db = low(adapter);

db.defaults({ posts: [], path: "."}).write();

const Post = db.get('posts')

module.exports = {
  db,
  Post
}
