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

import { EthAddress } from './ethAddress';

export class WalletSettleOperationInput {
    'token': EthAddress;
    /**
    * Amount to be settled
    */
    'amount': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "token",
            "baseName": "token",
            "type": "EthAddress"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WalletSettleOperationInput.attributeTypeMap;
    }
}

