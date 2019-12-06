# PaymentsApi

<a name="createPayment"></a>
# **createPayment**
> CreatePaymentResponse createPayment(body, chain)

This method generates a unique wallet address in the specified network to accept payment.

### Example
```javascript

import { PaymentsApi, PaymentsApiApiKeys, CreatePaymentRequest, EthAddress, Chain } from '@bleumi/pay-sdk';

// Instantiate client
const bleumiPay = new PaymentsApi();

async function createPayment(id: string) {
    try {
        bleumiPay.setApiKey(PaymentsApiApiKeys.ApiKeyAuth, '<YOUR_API_KEY>'); //Replace <YOUR_API_KEY> with your actual API key
        const buyer = new EthAddress('<BUYER_ADDR>'); // Replace <BUYER_ADDR> with the Buyer's Enthereum Network Address
        const merchant = new EthAddress('<MERCHANT_ADDR>'); // Replace <MERCHANT_ADDR> with the Merchant's Enthereum Network Address

        const createPaymentRequest = new CreatePaymentRequest();
        createPaymentRequest.id = id;
        createPaymentRequest.buyerAddress = buyer;
        createPaymentRequest.transferAddress = merchant;

        const chain = Chain.Ropsten;
        const response = await bleumiPay.createPayment(createPaymentRequest, chain);
        const createPaymentResponse = response.body;
        console.log(JSON.stringify(createPaymentResponse));
    } catch (err) {
        console.error('Error statusCode:', err.response.statusCode);
        console.error('Error reponse:', err.response.body);
    }
}

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreatePaymentRequest**](CreatePaymentRequest.md)| Specify payment creation parameters. |
 **chain** | [**Chain**](.md)| Ethereum network in which payment is to be created. Please refer documentation for [Supported Networks](https://pay.bleumi.com/docs/#supported-networks) |

### Return type

[**CreatePaymentResponse**](CreatePaymentResponse.md)

Field | Type | Description
----- | ----- | -----
addr | string | Wallet address

### 400 Errors

The following table is a list of possible error codes that can be returned, along with additional information about how to resolve them for a response with 400 status code.

errorCode <br> <i>errorMessage</i> | Description
---- | ---- 
ValidationError <br> <i>&lt;details&gt;</i> | Details on input which does not conform to the above schema
ValidationError <br> <i>wallet_already_exists&#124;&lt;addr&gt;</i> | A wallet with address &lt;addr&gt; has already been created with the specified payment 'id' for the given network


<a name="getPayment"></a>
# **getPayment**
> Payment getPayment(id)

This method retrieves the wallet addresses & token balances for a given payment.

### Example
```javascript
import { PaymentsApi, PaymentsApiApiKeys } from '@bleumi/pay-sdk';

// Instantiate clients
const bleumiPay = new PaymentsApi();

async function getPayment(id: string) {
    try {
        bleumiPay.setApiKey(PaymentsApiApiKeys.ApiKeyAuth, '<YOUR_API_KEY>'); //Replace <YOUR_API_KEY> with your actual API key
        const response = await bleumiPay.getPayment(id);
        const wallet = response.body;
        console.log(JSON.stringify(wallet));
    } catch (err) {
        console.error('Error statusCode:', err.response.statusCode);
        console.error('Error reponse:', err.response.body);
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Unique identifier of the payment (specified during [Create a Payment](#createPayment)) to retrieve |

### Return type

[**Payment**](Payment.md)

Field | Type | Description
----- | ----- | -----
addresses | dictionary | A dictionary which gives the address of the wallet generated for each network
balances | dictionary | A dictionary which gives the token balances in each network
createdAt | integer | The created UNIX timestamp of the payment
updatedAt | integer | The last updated UNIX timestamp of the payment

### 400 Errors

The following table is a list of possible error codes that can be returned, along with additional information about how to resolve them for a response with 400 status code.

errorCode <br> <i>errorMessage</i> | Description
---- | ----
ValidationError <br> <i>&lt;details&gt;</i> | Details on input which does not conform to the above schema


<a name="listPayments"></a>
# **listPayments**
> PaginatedPayments listPayments(nextToken, sortBy, startAt, endAt)

This method retrieves all payments created.

### Pagination

The list of payments is returned as an array in the 'results' field. The list is restricted to a maximum of 10 per page.

If there are more than 10 payments, a cursor is returned in the 'nextToken' field. Passing this as the 'nextToken' query parameter will fetch the next page.

When the value of 'nextToken' field is an empty string, there are no more payments.

### Example
```javascript
import { PaymentsApi, PaymentsApiApiKeys } from '@bleumi/pay-sdk';

// Instantiate client
const bleumiPay = new PaymentsApi();

async function listPayments() {
    try {
        const nextToken = ""; // string | Cursor to start results from
        const sortBy = "<SORT_BY>"; // string | Sort payments by | Eg. "createdAt"
        const startAt = "<START_TIMESTAMP>"; // string | Get payments from this timestamp | Eg. 1546300800 for 1-JAN-2019
        const endAt = ""; // string | Get payments till this timestamp
        bleumiPay.setApiKey(PaymentsApiApiKeys.ApiKeyAuth, '<YOUR_API_KEY>') //Replace <YOUR_API_KEY> with your actual API key
        const response = await bleumiPay.listPayments(nextToken, sortBy, startAt, endAt);
        const paginatedPayments = response.body;
        console.log(JSON.stringify(paginatedPayments));
    } catch (err) {
        console.error('Error statusCode:', err.response.statusCode);
        console.error('Error reponse:', err.response.body);
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nextToken** | **String**| Cursor to start results from | [optional]
 **sortBy** | **String**| Sort payments by | [optional] 'createdAt' - results will be sorted by created time in ascending order. <br>'updatedAt' - results will be sorted by last updated time in ascending order.
 **startAt** | **String**| Get payments from this timestamp (unix) | [optional]
 **endAt** | **String**| Get payments till this timestamp (unix) | [optional]

### Return type

[**PaginatedPayments**](PaginatedPayments.md)

Parameter | Type | Description
--------- | ------- | -----------
nextToken |  | Cursor to fetch next set of results (if next set is available)
results[] |  | Array of payments, output format is similar to the response of the [Retrieve a Payment](#getPayment) endpoint

### 400 Errors

The following table is a list of possible error codes that can be returned, along with additional information about how to resolve them for a response with 400 status code.

errorCode <br> <i>errorMessage</i> | Description
---- | ----
MalformedRequest <br> <i>nextToken_invalid</i> | 'nextToken' value is invalid
ValidationError <br> <i>&lt;details&gt;</i> | Details on input which does not conform to the above schema

<a name="settlePayment"></a>
# **settlePayment**
> PaymentOperationResponse settlePayment(body, id, chain)

This method settles a specific amount of a token for a given payment to the transferAddress (specified during [Create a Payment](#createPayment)) and remaining balance (if any) will be refunded to the buyerAddress (specified during [Create a Payment](#createPayment)).

### Example
```javascript

import { PaymentsApi, PaymentsApiApiKeys, PaymentSettleRequest, EthAddress } from '@bleumi/pay-sdk';

// Instantiate client
const bleumiPay = new PaymentsApi();

async function settleWallet(id: string) {
    try {
        bleumiPay.setApiKey(PaymentsApiApiKeys.ApiKeyAuth, '<YOUR_API_KEY>'); // string | Replace <YOUR_API_KEY> with your actual API key

        const token = new Token('<TOKEN>'); // string | Replace <TOKEN> with ETH or XDAI or ECR-20 token contract address or XDAIT

        const paymentSettleRequest = new PaymentSettleRequest();
        paymentSettleRequest.amount = '<AMT>'; // string | Replace <AMT> with settle amount
        paymentSettleRequest.token = token;

        const chain = Chain.Ropsten;
        const response = await bleumiPay.settlePayment(id, paymentSettleRequest, chain);
        const paymentSettleResponse = response.body;
        console.log(JSON.stringify(paymentSettleResponse));
    } catch (err) {
        console.error('Error statusCode:', err.response.statusCode);
        console.error('Error reponse:', err.response.body);
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PaymentSettleRequest**](PaymentSettleRequest.md)| Request body - used to specify the amount to settle. |
 **id** | **String**| Unique ID identifying this record in your system |
 **chain** | [**Chain**](Chain.md)| Ethereum network in which payment is to be created. |

### Return type

[**PaymentOperationResponse**](PaymentOperationResponse.md)

Parameter | Type | Description
--------- | ------- | -----------
txid |  | Unique identifier for the settle operation

### 400 Errors

The following table is a list of possible error codes that can be returned, along with additional information about how to resolve them for a response with 400 status code.

errorCode <br> <i>errorMessage</i> | Description
---- | ----
ValidationError <br> <i>&lt;details&gt;</i> | Details on input which does not conform to the above schema
ValidationError <br> <i>no_gas_accounts</i> | No active gas accounts present in account, please activate atleast one account from the developer portal
ValidationError <br> <i>prev_tx_inprogress</i> | A previous operation is still being processed for this wallet
ValidationError <br> <i>invalid_token</i> | Provided token is not valid for the specified 'net' & 'chain'



<a name="refundPayment"></a>
# **refundPayment**
> PaymentOperationResponse refundPayment(body, id, chain)

This method refunds the balance of a token for a given payment to the buyerAddress (specified during [Create a Payment](#createPayment)).

### Example
```javascript

import { PaymentsApi, PaymentsApiApiKeys, WalletRefundOperationInput,  EthAddress } from '@bleumi/pay-sdk';

// Instantiate client
const bleumiPay = new PaymentsApi();

async function refundWallet(id: string) {
    try {
        bleumiPay.setApiKey(PaymentsApiApiKeys.ApiKeyAuth, '<YOUR_API_KEY>'); //Replace <YOUR_API_KEY> with your actual API key

        const token = new Token('<TOKEN>'); // string | The ECR-20 token to refund | Replace <TOKEN> with ETH or XDAI or ECR-20 token contract address or XDAIT
        const paymentRefundRequest = new PaymentRefundRequest();
        paymentRefundRequest.token = token;

        const chain = Chain.Ropsten;
        const response = await bleumiPay.refundWallet(id, paymentRefundRequest, chain);
        const paymentOperationResponse = response.body;
        console.log(JSON.stringify(paymentOperationResponse));
    } catch (err) {
        console.error('Error statusCode:', err.response.statusCode);
        console.error('Error reponse:', err.response.body);
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PaymentRefundRequest**](PaymentRefundRequest.md)| Request body - used to specify the token to refund. |
 **id** | **String**| Unique ID identifying this record in your system |
 **chain** | [**Chain**](Chain.md)| Ethereum network in which payment is to be created. | 

### Return type

[**PaymentOperationResponse**](PaymentOperationResponse.md)

Parameter | Type | Description
--------- | ------- | -----------
txid |  | Unique identifier for the refund operation

### 400 Errors

The following table is a list of possible error codes that can be returned, along with additional information about how to resolve them for a response with 400 status code.

errorCode <br> <i>errorMessage</i> | Description
---- | ----
ValidationError <br> <i>&lt;details&gt;</i> | Details on input which does not conform to the above schema
ValidationError <br> <i>no_gas_accounts</i> | No active gas accounts present in account, please activate atleast one account from the developer portal
ValidationError <br> <i>prev_tx_inprogress</i> | A previous operation is still being processed for this wallet
ValidationError <br> <i>invalid_token</i> | Provided address is not a valid ERC-20 token


<a name="getPaymentOperation"></a>
# **getPaymentOperation**
> PaymentOperation getPaymentOperation(id, txid)

This method retrieves a payment operation for a specific payment.

### Example
```javascript
import { PaymentsApi, PaymentsApiApiKeys } from '@bleumi/pay-sdk';

// Instantiate client
const bleumiPay = new PaymentsApi();

async function getPaymentOperation(id: string, txId: string) {
    try {
        bleumiPay.setApiKey(PaymentsApiApiKeys.ApiKeyAuth, '<YOUR_API_KEY>'); //Replace <YOUR_API_KEY> with your actual API key
        const response = await bleumiPay.getPaymentOperation(id, txId);
        const paymentOperation = response.body;
        console.log(JSON.stringify(paymentOperation));
    } catch (err) {
        console.error('Error statusCode:', err.response.statusCode);
        console.error('Error reponse:', err.response.body);
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Unique ID identifying the payment in your system |
 **txid** | **String**| ID of a specific operation of the payment |

### Return type

[**PaymentOperation**](PaymentOperation.md)


<a name="listPaymentOperations"></a>
# **listPaymentOperations**
> PaginatedPaymentOperations listPaymentOperations(id, nextToken)

This method retrieves all payment operations for a specific payment.

### Pagination

The list of operations is returned as an array in the 'results' field. The list is restricted to a maximum of 10 operations per page.

If there are more than 10 operations for a wallet, a cursor is passed in the 'nextToken' field. Passing this as the 'nextToken' query parameter will fetch the next page. 

When the value of 'nextToken' field is an empty string, there are no more operations.

### Example
```javascript
import { PaymentsApi, PaymentsApiApiKeys } from '@bleumi/pay-sdk';

// Instantiate client
const bleumiPay = new PaymentsApi();

async function listPaymentOperations(id: string, nextToken: string) {
    try {
        bleumiPay.setApiKey(PaymentsApiApiKeys.ApiKeyAuth, '<YOUR_API_KEY>'); //Replace <YOUR_API_KEY> with your actual API key
        const response = await bleumiPay.listPaymentOperations(id, nextToken);
        const paginatedPaymentOperations = response.body;
        console.log(JSON.stringify(paginatedPaymentOperations));
    } catch (err) {
        console.error('Error statusCode:', err.response.statusCode);
        console.error('Error reponse:', err.response.body);
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Unique ID identifying the payment in your system |
 **nextToken** | **String**| Cursor to start results from | [optional]

### Return type

[**PaginatedPaymentOperations**](PaginatedPaymentOperations.md)

Parameter | Type | Description
--------- | ------- | -----------
nextToken |  | Cursor to fetch next set of results (if next set is available)
results[] |  | Array of payment operations, output format is similar to the response of the [Retrieve a Payment Operation](#getPaymentOperation) endpoint

### 400 Errors

The following table is a list of possible error codes that can be returned, along with additional information about how to resolve them for a response with 400 status code.

errorCode <br> <i>errorMessage</i> | Description
---- | ----
MalformedRequest <br> <i>nextToken_invalid</i> | 'nextToken' value is invalid
ValidationError <br> <i>&lt;details&gt;</i> | Details on input which does not conform to the above schema
