/*
NOTE: Do no log anything apart from access_token
*/

doc = `
API Management Postman Test Runner

Usage:
  test-runner.js <token> <api_key> <api_secret> <url>
  test-runner.js -h | --help

  -h --help  Show this text.
`

const docopt = require('docopt').docopt
const axios = require('axios')

async function main(args) {
  const url = args['<url>']
  const credentials = {
    apiKey: args['<api_key>'],
    apiSecret: args['<api_secret>'],
    token: args['<token>']
  }

  return getAccessToken(url, credentials)
}

async function getAccessToken(url, {apiKey, apiSecret, token}) {
  const authBase64 = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64')

  return axios.get(url, {
    headers: {
      'token': token,
      'grant_type': 'client_credentials',
      'Authorization': `Basic ${authBase64}`
    }
  })
}

args = docopt(doc)
main(args)
  .then(res => console.log(res.data['access_token']))
  .catch(e => console.error("unhandled exception occurred: ", e))

