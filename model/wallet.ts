/**
 * Bleumi Pay API
 * A simple and powerful REST API to integrate ERC20 payments into your business or application
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@bleumi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { WalletBalance } from './walletBalance';
import { WalletInputs } from './walletInputs';

export class Wallet {
    /**
    * Unique ID identifying the wallet; specified when it was created by your system
    */
    'id': string;
    /**
    * Ethereum network in which wallet is to be created. Please refer to the [network list](https://pay.bleumi.com/docs/#supported-ethereum-networks)
    */
    'chain': string;
    /**
    * Wallet address
    */
    'addr': string;
    /**
    * The current token balance
    */
    'balances': { [key: string]: WalletBalance; };
    'inputs': WalletInputs;
    /**
    * UNIX timestamp when the wallet was created
    */
    'createdAt': number;
    /**
    * UNIX timestamp when the lastest operation was performed
    */
    'updatedAt': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "chain",
            "baseName": "chain",
            "type": "string"
        },
        {
            "name": "addr",
            "baseName": "addr",
            "type": "string"
        },
        {
            "name": "balances",
            "baseName": "balances",
            "type": "{ [key: string]: WalletBalance; }"
        },
        {
            "name": "inputs",
            "baseName": "inputs",
            "type": "WalletInputs"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "number"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return Wallet.attributeTypeMap;
    }
}
