'use strict'

import { Alchemy, Network } from 'alchemy-sdk'
import fs from 'fs'

const config = {
  apiKey: 'KTHY6dSRDoYxkAMQo0EfNEfRBCRvMO1o',
  network: Network.ETH_MAINNET,
}

const alchemy = new Alchemy(config)

// 读取json文件
let rawdata = fs.readFileSync('config.json')
let parse_rawdata = JSON.parse(rawdata)
let result = parse_rawdata
const arr = []
arr.push(result)

for (let i of arr) {
  var address = Object.keys(i)
  for (let index = 0; index < address.length; index++) {
    var ADDRESS = address[index]
    const data = await alchemy.core.getTransactionCount(`${ADDRESS}`)
    var content = `${ADDRESS}\n`
    const option = {
      flag: 'a',
    }

    console.log(data, ADDRESS)
    if (data > 2222) {
      fs.writeFile('config.txt', content, option, error => {
        if (error) {
          console.log('fs.writeFile failed err: ', error)
        }
      })
    }
  }
}
