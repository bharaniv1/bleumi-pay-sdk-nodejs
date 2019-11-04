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

import { EthNetwork } from './ethNetwork';

export class WalletCreateOutput {
    'chain': EthNetwork;
    /**
    * Address of the newly created wallet
    */
    'addr': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "chain",
            "baseName": "chain",
            "type": "EthNetwork"
        },
        {
            "name": "addr",
            "baseName": "addr",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WalletCreateOutput.attributeTypeMap;
    }
}
