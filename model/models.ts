export * from './algorandBalance';
export * from './algorandWalletAddress';
export * from './algorandWalletInputs';
export * from './badRequest';
export * from './chain';
export * from './checkoutToken';
export * from './createCheckoutUrlRequest';
export * from './createCheckoutUrlResponse';
export * from './createPaymentRequest';
export * from './createPaymentResponse';
export * from './createPayoutRequest';
export * from './createPayoutResponse';
export * from './ethereumBalance';
export * from './ethereumWalletAddress';
export * from './ethereumWalletInputs';
export * from './paginatedPaymentOperations';
export * from './paginatedPayments';
export * from './paginatedPayoutItems';
export * from './payment';
export * from './paymentAddresses';
export * from './paymentBalances';
export * from './paymentOperation';
export * from './paymentOperationInputs';
export * from './paymentOperationResponse';
export * from './paymentRefundRequest';
export * from './paymentSettleRequest';
export * from './payout';
export * from './payoutItem';
export * from './payoutItemInputs';
export * from './rskBalance';
export * from './validateCheckoutRequest';
export * from './validateCheckoutResponse';
export * from './walletBalance';

import localVarRequest = require('request');

import { AlgorandBalance } from './algorandBalance';
import { AlgorandWalletAddress } from './algorandWalletAddress';
import { AlgorandWalletInputs } from './algorandWalletInputs';
import { BadRequest } from './badRequest';
import { Chain } from './chain';
import { CheckoutToken } from './checkoutToken';
import { CreateCheckoutUrlRequest } from './createCheckoutUrlRequest';
import { CreateCheckoutUrlResponse } from './createCheckoutUrlResponse';
import { CreatePaymentRequest } from './createPaymentRequest';
import { CreatePaymentResponse } from './createPaymentResponse';
import { CreatePayoutRequest } from './createPayoutRequest';
import { CreatePayoutResponse } from './createPayoutResponse';
import { EthereumBalance } from './ethereumBalance';
import { EthereumWalletAddress } from './ethereumWalletAddress';
import { EthereumWalletInputs } from './ethereumWalletInputs';
import { PaginatedPaymentOperations } from './paginatedPaymentOperations';
import { PaginatedPayments } from './paginatedPayments';
import { PaginatedPayoutItems } from './paginatedPayoutItems';
import { Payment } from './payment';
import { PaymentAddresses } from './paymentAddresses';
import { PaymentBalances } from './paymentBalances';
import { PaymentOperation } from './paymentOperation';
import { PaymentOperationInputs } from './paymentOperationInputs';
import { PaymentOperationResponse } from './paymentOperationResponse';
import { PaymentRefundRequest } from './paymentRefundRequest';
import { PaymentSettleRequest } from './paymentSettleRequest';
import { Payout } from './payout';
import { PayoutItem } from './payoutItem';
import { PayoutItemInputs } from './payoutItemInputs';
import { RskBalance } from './rskBalance';
import { ValidateCheckoutRequest } from './validateCheckoutRequest';
import { ValidateCheckoutResponse } from './validateCheckoutResponse';
import { WalletBalance } from './walletBalance';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "Chain": Chain,
}

let typeMap: {[index: string]: any} = {
    "AlgorandBalance": AlgorandBalance,
    "AlgorandWalletAddress": AlgorandWalletAddress,
    "AlgorandWalletInputs": AlgorandWalletInputs,
    "BadRequest": BadRequest,
    "CheckoutToken": CheckoutToken,
    "CreateCheckoutUrlRequest": CreateCheckoutUrlRequest,
    "CreateCheckoutUrlResponse": CreateCheckoutUrlResponse,
    "CreatePaymentRequest": CreatePaymentRequest,
    "CreatePaymentResponse": CreatePaymentResponse,
    "CreatePayoutRequest": CreatePayoutRequest,
    "CreatePayoutResponse": CreatePayoutResponse,
    "EthereumBalance": EthereumBalance,
    "EthereumWalletAddress": EthereumWalletAddress,
    "EthereumWalletInputs": EthereumWalletInputs,
    "PaginatedPaymentOperations": PaginatedPaymentOperations,
    "PaginatedPayments": PaginatedPayments,
    "PaginatedPayoutItems": PaginatedPayoutItems,
    "Payment": Payment,
    "PaymentAddresses": PaymentAddresses,
    "PaymentBalances": PaymentBalances,
    "PaymentOperation": PaymentOperation,
    "PaymentOperationInputs": PaymentOperationInputs,
    "PaymentOperationResponse": PaymentOperationResponse,
    "PaymentRefundRequest": PaymentRefundRequest,
    "PaymentSettleRequest": PaymentSettleRequest,
    "Payout": Payout,
    "PayoutItem": PayoutItem,
    "PayoutItemInputs": PayoutItemInputs,
    "RskBalance": RskBalance,
    "ValidateCheckoutRequest": ValidateCheckoutRequest,
    "ValidateCheckoutResponse": ValidateCheckoutResponse,
    "WalletBalance": WalletBalance,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
