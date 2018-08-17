const { spawn } = require('child_process')
const treekill = require('tree-kill')
const stream = require('stream')
const execa = require('execa')
const puppeteer = require('puppeteer')
const fs = require('fs-extra')
jest.setTimeout(1000 * 60 * 5)

const spawnWaitfor = (cmd, args, text) =>
  new Promise((resolve, reject) => {
    const child = spawn(cmd, args)

    child.stdout.on('data', data => {
      if (data.toString().match(text)) {
        resolve(child)
      }
    })

    child.stderr.on('data', data => {
      if (data.toString().match(text)) {
        resolve(child)
      }
    })

    child.on('close', code => {
      reject(code)
    })
  })

const sleep = time =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, time)
  })

describe('integration', () => {
  it('works', async () => {
    const input = new stream.PassThrough()
    setTimeout(async () => {
      input.write('\n')
      await sleep(200)
      input.write('\n')
      await sleep(200)
      input.write('\n')
      await sleep(200)
      input.write('\n')
      await sleep(200)
      input.write('\n')
      await sleep(200)
      input.write('\n')
      await sleep(200)
      input.write('y\n')
      input.end()
    }, 1000)
    const res = await execa('./bin.js', ['site', 'new'], {
      input
    })
    console.log('res', res)
    const server = await spawnWaitfor(
      'sh',
      ['-c', 'cd www && yarn && yarn start'],
      'can now view'
    )
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('http://localhost:8000/')
    const html = await page.$eval('div h1', e => e.innerHTML)
    expect(html).toEqual('Bamboo')
    await browser.close()
    treekill(server.pid)
  })
})
