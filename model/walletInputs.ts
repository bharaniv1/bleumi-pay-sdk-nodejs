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


export class WalletInputs {
    /**
    * Address of the buyer
    */
    'buyer': string;
    /**
    * Address of the merchant
    */
    'merchant': string;
    /**
    * Wallet Library address
    */
    'walletLibrary': string;
    /**
    * Wallet Proxy address
    */
    'walletProxy': string;
    /**
    * Salt used to create the wallet
    */
    'salt': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "buyer",
            "baseName": "buyer",
            "type": "string"
        },
        {
            "name": "merchant",
            "baseName": "merchant",
            "type": "string"
        },
        {
            "name": "walletLibrary",
            "baseName": "walletLibrary",
            "type": "string"
        },
        {
            "name": "walletProxy",
            "baseName": "walletProxy",
            "type": "string"
        },
        {
            "name": "salt",
            "baseName": "salt",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WalletInputs.attributeTypeMap;
    }
}
