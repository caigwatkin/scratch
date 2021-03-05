const axios = require('axios')

const TMP_URL = ''

const tmpApiClient = axios.create({
  baseURL: TMP_URL,
  headers: {
    Accept: 'application/json',
  },
})

export async function tmpGet() {
  const response = await tmpApiClient.get('/')

  return response
}
