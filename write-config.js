const fs = require('fs')
const ini = require('ini')
const os = require('os')
const path = require('path')

const configPath = path.join(os.homedir(), '.dcli')

const configObject = {
  "focus": {
    "connectionInFocus": "demo-content-room/source",
    "roomInFocus": "diograph-cli/tmp/room",
  },
  "rooms": {
    "/tmp/room": {
      "address": "/tmp/room",
      "roomClientType": "LocalClient"
    }
  }
}

const writeConfig = () => {
  fs.writeFileSync(configPath, ini.stringify(configObject))
  console.log(`Configuration written to: ${configPath}`)
}

const readConfig = () => {
  const iniContent = fs.readFileSync(configPath, 'utf-8')
  const parsedConfigObject = ini.parse(iniContent)
  console.log('Parsed Configuration Object:', parsedConfigObject.rooms['/tmp/room'].address)
}

module.exports = { writeConfig, readConfig }
