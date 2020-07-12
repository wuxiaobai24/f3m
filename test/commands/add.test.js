const {expect, test} = require('@oclif/test')

describe('add', () => {
  test
  .stdout()
  .command(['add', '--path', 'test-content'])
  .it('runs add --path test-content', ctx => {
    expect(ctx.stdout).to.contain('')
  })
})
