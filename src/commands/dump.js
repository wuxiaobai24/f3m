const {Command, flags} = require('@oclif/command')

const fs = require('fs');
const Path = require('path')
const matter = require('gray-matter')
const {db, Post} = require('../lib/db')

class DumpCommand extends Command {
  static args = [
    {name: 'path'}
  ]
  async run() {
    const {args} = this.parse(DumpCommand)
    console.log(`Path is ${args.path}`)
    Post.value().forEach(post => {
      this.dump(post, args.path)
    })
  }
  async dump(post, basepath) {
    const data = matter.read(post.path)
    const path = Path.join(basepath, Path.basename(post.path))
    fs.writeFile(path, matter.stringify(data.content, post.matter), 'utf8', err => {
      if (err) {
        console.log(path, err)
      }
    })
    // console.log(data)
  }
}

DumpCommand.description = `Describe the command here
...
Extra documentation goes here
`

DumpCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = DumpCommand
