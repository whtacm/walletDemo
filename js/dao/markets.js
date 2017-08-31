/**
 *
 */

'use strict';
import Server from './config'

export default function getMarkets() {
    return new Promise((resolve, reject) => {
        fetch({
            url: `${Server.YUNBI.HOST}/v2/markets.json`,
            method: 'get'
        }).then(res => {
            resolve(res.json());
        }).catch(err => {
            reject(err);
        })
    });
}