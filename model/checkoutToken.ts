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

export class CheckoutToken {
    /**
    * The network in which the token is defined
    */
    'network': string;
    /**
    * The chain in which the token is defined
    */
    'chain': string;
    /**
    * The address of the token
    */
    'addr': string;
    /**
    * Name of the token
    */
    'name': string;
    /**
    * Symbol of the token
    */
    'symbol': string;
    /**
    * Token decimal places
    */
    'decimals': number;
    /**
    * Currency code of the token
    */
    'currency': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "network",
            "baseName": "network",
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
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "symbol",
            "baseName": "symbol",
            "type": "string"
        },
        {
            "name": "decimals",
            "baseName": "decimals",
            "type": "number"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CheckoutToken.attributeTypeMap;
    }
}

