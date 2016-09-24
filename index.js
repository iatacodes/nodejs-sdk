const request = require('request');
const _ = require('lodash');

class IC {
    constructor(api_key = 'YOUR-API-KEY', version = 6) {
        this.api_key = api_key;
        this.url = `https://iatacodes.org/api/v${version}/`;
    }
    api(method='ping', params={}, callback) {
        request.post({
            url : `${this.url}${method}.json`,
            form : _.extend({api_key: this.api_key}, params)
        }, function(e, r, b) {
            if(!b) return callback(new Error('empty response'));
            let result = JSON.parse(b);
            callback(result.error, result.response, result.request);
        });
    }
}

module.exports = IC;
