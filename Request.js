const axios = require('axios').default;

class Request {

  constructor() {
    this._client = axios;
  }

  async request(path = '', method = 'GET', data) {
    try {

      const response = await _makeRequest(this._client, method, path, data);
      
      return response;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new Request();

async function _makeRequest (client, method, path = '', data) {
  try {
    switch (method.toUpperCase()) {
      case 'GET':
        return await client.get(path);
      case 'POST':
        return await client.post(path, data);
    }
  } catch (err) {
    throw err;
  }
}