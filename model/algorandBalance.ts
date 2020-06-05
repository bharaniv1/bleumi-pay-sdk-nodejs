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
import { WalletBalance } from './walletBalance';

export class AlgorandBalance {
    'algMainnet'?: { [key: string]: WalletBalance; };
    'algTestnet'?: { [key: string]: WalletBalance; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "algMainnet",
            "baseName": "alg_mainnet",
            "type": "{ [key: string]: WalletBalance; }"
        },
        {
            "name": "algTestnet",
            "baseName": "alg_testnet",
            "type": "{ [key: string]: WalletBalance; }"
        }    ];

    static getAttributeTypeMap() {
        return AlgorandBalance.attributeTypeMap;
    }
}

