/**
 * Bleumi Pay REST API
 * A simple and powerful REST API to integrate ERC-20, Ethereum, xDai, Algorand payments and/or payouts into your business or application
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@bleumi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { Payout } from './payout';

export class CreatePayoutRequest {
    /**
    * Unique identifier for this payout
    */
    'txid': string;
    /**
    * ETH - for Ethereum ; XDAI - for xDai ; XDAIT - for xDai Testnet ; ALGO - Algo; <asset id> - for Algorand Standard Asset; <contract address of ERC-20 token> - for ERC-20 Tokens;
    */
    'token': string;
    /**
    * Array of payments to be made in this payout. This is an atomic transaction (i.e. either all payments are processed or all of them are rejected).
    */
    'payouts': Array<Payout>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "txid",
            "baseName": "txid",
            "type": "string"
        },
        {
            "name": "token",
            "baseName": "token",
            "type": "string"
        },
        {
            "name": "payouts",
            "baseName": "payouts",
            "type": "Array<Payout>"
        }    ];

    static getAttributeTypeMap() {
        return CreatePayoutRequest.attributeTypeMap;
    }
}

