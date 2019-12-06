/**
 * Bleumi Pay API
 * A simple and powerful REST API to integrate ERC-20, Ethereum, xDai payments and/or payouts into your business or application
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@bleumi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PaymentOperation } from './paymentOperation';

export class PaginatedPaymentOperations {
    /**
    * List of operations of the payment in the current page
    */
    'results': Array<PaymentOperation>;
    /**
    * Cursor to fetch next page of results, empty if no more results
    */
    'nextToken'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<PaymentOperation>"
        },
        {
            "name": "nextToken",
            "baseName": "nextToken",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaginatedPaymentOperations.attributeTypeMap;
    }
}
