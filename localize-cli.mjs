import fetch from 'node-fetch'
import fs from 'fs'
import { config } from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

config()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

let codes = []
loop(`${__dirname}/src`)
fetch(process.env.API_URL + '/translation/codes', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: process.argv[2]
      ? process.argv[2].substring(10)
      : process.env.API_TOKEN
  },
  body: JSON.stringify(codes)
}).then((response) => {
  if (response.status === 200) {
    console.log(
      'Success ! ' + codes.length + ' codes were sent to the server :)'
    )
  } else {
    console.log('Error ! something wrong appened :(')
  }
})

function loop(path) {
  try {
    const stats = fs.statSync(path)
    if (stats.isFile()) {
      file(path)
    }
    if (stats.isDirectory()) {
      dir(path)
    }
  } catch (err) {
    console.error(err)
  }
}

function file(path) {
  const ext = path.slice(-4)
  if (ext === '.jsx' || ext === '.tsx') {
    const data = fs.readFileSync(path, 'utf8')
    codes = codes.concat(
      [...data.matchAll('<Translate *code="(.*)"')].map((e) => e[1])
    )
  }
}

function dir(path) {
  const items = fs.readdirSync(path)
  for (var i = 0; i < items.length; i++) {
    loop(path + '/' + items[i])
  }
}
