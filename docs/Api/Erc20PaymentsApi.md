# Erc20PaymentsApi

# **createWallet**

> WalletCreateOutput createWallet($body, $chain)

Create an unique wallet address to accept payments for an ERC-20 token from a buyer

### Example
```javascript

import { Erc20PaymentsApi, Erc20PaymentsApiApiKeys, WalletCreateInput, WalletRefundOperationInput, WalletSettleOperationInput, EthAddress, EthNetwork } from '@bleumi/pay-sdk';

// Instantiate client
const bleumiPay = new Erc20PaymentsApi();

async function createWallet(id: string) {
    try {
        bleumiPay.setApiKey(Erc20PaymentsApiApiKeys.ApiKeyAuth, '<YOUR_API_KEY>'); //Replace <YOUR_API_KEY> with your actual API key
        const buyer = new EthAddress('<BUYER_ADDR>'); // Replace <BUYER_ADDR> with the Buyer's Enthereum Network Address
        const merchant = new EthAddress('<MERCHANT_ADDR>'); // Replace <MERCHANT_ADDR> with the Merchant's Enthereum Network Address

        const walletCreateInput = new WalletCreateInput();
        walletCreateInput.id = id;
        walletCreateInput.buyerAddress = buyer;
        walletCreateInput.transferAddress = merchant;

        const chain = EthNetwork.Ropsten;
        const response = await bleumiPay.createWallet(walletCreateInput, chain);
        const walletCreateOutput = response.body;
        console.log(JSON.stringify(walletCreateOutput));
    } catch (err) {
        console.error('Error statusCode:', err.response.statusCode);
        console.error('Error reponse:', err.response.body);
    }
}

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletCreateInput** | [**WalletCreateInput**](../Model/WalletCreateInput.md)| Specify the parameters for the wallet creations.  |
 **chain** | [**EthNetwork**](../Model/EthNetwork.md)| Ethereum network in which the wallet is to be created. Please refer to the [Supported Ethereum Networks] (https://pay.bleumi.com/docs/#supported-ethereum-networks) |

### Return type

[**WalletCreateOutput**](../Model/WalletCreateOutput.md)

# **getWallet**
> Wallet getWallet($id)

Return a specific wallet

### Example
```javascript
import { Erc20PaymentsApi, Erc20PaymentsApiApiKeys } from '@bleumi/pay-sdk';

// Instantiate clients
const bleumiPay = new Erc20PaymentsApi();

async function getWallet(id: string) {
    try {
        bleumiPay.setApiKey(Erc20PaymentsApiApiKeys.ApiKeyAuth, '<YOUR_API_KEY>'); //Replace <YOUR_API_KEY> with your actual API key
        const response = await bleumiPay.getWallet(id);
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
 **id** | **string**| Unique ID identifying the wallet in your system |

### Return type

[**Wallet**](../Model/Wallet.md)

# **listWallets**
> PaginatedWallets listWallets($next_token, $sort_by, $start_at, $end_at)

This method retrieves a list of wallets.
The list of wallets is returned as an array in the 'results' field. The list is restricted to a maximum of 100 wallets.
If there are more wallets a cursor is passed in the 'nextToken' field. Passing this as the 'nextToken' query parameter will fetch the next page.
When the value of 'nextToken' field is an empty string, there are no more wallets.

### Example
```javascript
import { Erc20PaymentsApi, Erc20PaymentsApiApiKeys } from '@bleumi/pay-sdk';

// Instantiate client
const bleumiPay = new Erc20PaymentsApi();

async function listWallets() {
    try {
        const nextToken = ""; // string | Cursor to start results from
        const sortBy = "<SORT_BY>"; // string | Sort wallets by | Eg. "createdAt"
        const startAt = "<START_TIMESTAMP>"; // string | Get wallets from this timestamp | Eg. 1546300800 for 1-JAN-2019
        const endAt = ""; // string | Get wallets till this timestamp
        bleumiPay.setApiKey(Erc20PaymentsApiApiKeys.ApiKeyAuth, '<YOUR_API_KEY>') //Replace <YOUR_API_KEY> with your actual API key
        const response = await bleumiPay.listWallets(nextToken, sortBy, startAt, endAt);
        const paginatedWallets = response.body;
        console.log(JSON.stringify(paginatedWallets));
    } catch (err) {
        console.error('Error statusCode:', err.response.statusCode);
        console.error('Error reponse:', err.response.body);
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nextToken** | **string**| The token to fetch the next page, supply blank value to get the first page of wallet operations | [optional]
 **sortBy** | **string**| Sort wallets by | [optional] <b>'createdAt'</b> - results will be sorted by created time in ascending order. <br/><b>'updatedAt'</b> - results will be sorted by last updated time in ascending order.
 **startAt** | **string**| Get wallets from this timestamp | [optional] Get payments from this timestamp (UNIX). Will be compared to created or updated time based on the value of sortBy parameter.
 **endAt** | **string**| Get wallets till this timestamp | [optional] Get payments till this timestamp (UNIX). Will be compared to created or updated time based on the value of sortBy parameter.

### Return type

[**PaginatedWallets**](../Model/PaginatedWallets.md)

# **settleWallet**
> WalletOperationOutput settleWallet($body, $id)

Settle a wallet, settle amount will be transferred to the payment processor or the merchant as specified at the time of creation of the wallet. Supply the unique id that was used when the wallet was created.

If the settle amount is less than the current wallet balance, the requested amount will be sent to the seller. The remaining amount will be refunded to the buyer. At the end of settle operation, the wallet balance will be zero.

If the settle amount is more than the current wallet balance, no action is performed.


### Example
```javascript

import { Erc20PaymentsApi, Erc20PaymentsApiApiKeys, WalletSettleOperationInput, EthAddress } from '@bleumi/pay-sdk';

// Instantiate client
const bleumiPay = new Erc20PaymentsApi();

async function settleWallet(id: string) {
    try {
        bleumiPay.setApiKey(Erc20PaymentsApiApiKeys.ApiKeyAuth, '<YOUR_API_KEY>'); // string | Replace <YOUR_API_KEY> with your actual API key

        const token = new EthAddress('<TOKEN_ADDR>'); // string | Replace <TOKEN_ADDR> with ECR-20 token address

        const settleOperationInput = new WalletSettleOperationInput();
        settleOperationInput.amount = '<AMT>'; // string | Replace <AMT> with settle amount
        settleOperationInput.token = token;

        const response = await bleumiPay.settleWallet(id, settleOperationInput);
        const walletOperationOutput = response.body;
        console.log(JSON.stringify(walletOperationOutput));
    } catch (err) {
        console.error('Error statusCode:', err.response.statusCode);
        console.error('Error reponse:', err.response.body);
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Unique identifier of the wallet (specified during [Create Wallet](#createwallet)) to settle
 **walletSettleOperationInput** | [**WalletSettleOperationInput**](../Model/WalletSettleOperationInput.md)| Specify the token and amount to settle. |


### Return type

[**WalletOperationOutput**](../Model/WalletOperationOutput.md)

# **refundWallet**
> WalletOperationOutput refundWallet($body, $id)

Refund wallet. The entire wallet amount will be transferred to the buyer. Supply the unique id that was used when the wallet was created.

At the end of refund operation, the wallet balance will be zero.

### Example
```javascript

import { Erc20PaymentsApi, Erc20PaymentsApiApiKeys, WalletRefundOperationInput,  EthAddress } from '@bleumi/pay-sdk';

// Instantiate client
const bleumiPay = new Erc20PaymentsApi();

async function refundWallet(id: string) {
    try {
        bleumiPay.setApiKey(Erc20PaymentsApiApiKeys.ApiKeyAuth, '<YOUR_API_KEY>'); //Replace <YOUR_API_KEY> with your actual API key

        const token = new EthAddress('<TOKEN_ADDR>'); // string | The ECR-20 token to refund | Replace <TOKEN_ADDR> with the Token Contract Address
        const refundOperationInput = new WalletRefundOperationInput();
        refundOperationInput.token = token;

        const response = await bleumiPay.refundWallet(id, refundOperationInput);
        const walletOperationOutput = response.body;
        console.log(JSON.stringify(walletOperationOutput));
    } catch (err) {
        console.error('Error statusCode:', err.response.statusCode);
        console.error('Error reponse:', err.response.body);
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Unique identifier of the wallet (specified during [Create Wallet](#createwallet)) to refund |
 **walletRefundOperationInput** | [**WalletRefundOperationInput**](../Model/WalletRefundOperationInput.md)| Specify the token to refund. |


### Return type

[**WalletOperationOutput**](../Model/WalletOperationOutput.md)


# **getWalletOperation**
> WalletOperation getWalletOperation($id, $txid)

Return a specific operation of the wallet

### Example
```javascript
import { Erc20PaymentsApi, Erc20PaymentsApiApiKeys } from '@bleumi/pay-sdk';

// Instantiate client
const bleumiPay = new Erc20PaymentsApi();

async function getOperation(id: string, txId: string) {
    try {
        bleumiPay.setApiKey(Erc20PaymentsApiApiKeys.ApiKeyAuth, '<YOUR_API_KEY>'); //Replace <YOUR_API_KEY> with your actual API key
        const response = await bleumiPay.getWalletOperation(id, txId);
        const walletOperation = response.body;
        console.log(JSON.stringify(walletOperation));
    } catch (err) {
        console.error('Error statusCode:', err.response.statusCode);
        console.error('Error reponse:', err.response.body);
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Unique identifier of the wallet (specified during [Create Wallet](#createwallet)) |
 **txid** | **string**| Transaction ID of the operation (returned during [Refund Wallet](#refundwallet) / [Settle Wallet](#settlewallet)) to retrieve |

### Return type

[**WalletOperation**](../Model/WalletOperation.md)

# **getWalletOperations**
> PaginatedWalletOperations getWalletOperations($id, $next_token)

This method retrieves the list of wallet operations performed by the mechant on a specific wallet.
The list of wallet operations is returned as an array in the 'results' field. The list is restricted to a maximum of 100 wallet operations.
If there are more wallet operations a cursor is passed in the 'nextToken' field. Passing this as the 'nextToken' query parameter will fetch the next page.
When the value of 'nextToken' field is an empty string, there are no more wallet operations.

### Example
```javascript
import { Erc20PaymentsApi, Erc20PaymentsApiApiKeys } from '@bleumi/pay-sdk';

// Instantiate client
const bleumiPay = new Erc20PaymentsApi();

async function listWalletOperations(id: string, nextToken: string) {
    try {
        bleumiPay.setApiKey(Erc20PaymentsApiApiKeys.ApiKeyAuth, '<YOUR_API_KEY>'); //Replace <YOUR_API_KEY> with your actual API key
        const response = await bleumiPay.getWalletOperations(id, nextToken);
        const paginatedWalletOperations = response.body;
        console.log(JSON.stringify(paginatedWalletOperations));
    } catch (err) {
        console.error('Error statusCode:', err.response.statusCode);
        console.error('Error reponse:', err.response.body);
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Unique identifier of the wallet (specified during [Create Wallet](#createwallet)) |
 **nextToken** | **string**| The token to fetch the next page, supply blank value to get the first page of wallet operations | [optional]

### Return type

[**PaginatedWalletOperations**](../Model/PaginatedWalletOperations.md)

### Response Sample

> The above code will result in JSON structured like this:

```json
{
  "chain": "ropsten",
  "addr": "0xbefda6e35785ff904732fb71e10acaaab29c39e4"
}
```