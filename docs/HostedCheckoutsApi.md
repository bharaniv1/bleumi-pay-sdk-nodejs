# HostedCheckoutsApi

<a name="createCheckoutUrl"></a>
# **createCheckoutUrl**
> CreateCheckoutUrlResponse createCheckoutUrl(body)

This method generates an unique checkout URL to accept payment.

### Example
```javascript

import { HostedCheckoutsApi, HostedCheckoutsApiApiKeys, CreateCheckoutUrlRequest } from '@bleumi/pay-sdk';

// Instantiate client
const bleumiPay = new HostedCheckoutsApi();

async function createCheckoutUrl(id: string) {
    try {
        bleumiPay.setApiKey(HostedCheckoutsApiApiKeys.ApiKeyAuth, '<YOUR_API_KEY>'); //Replace <YOUR_API_KEY> with your actual API key

        const chain = Chain.Goerli;
        const createCheckoutUrlRequest = new CreateCheckoutUrlRequest();

        createCheckoutUrlRequest.id = id
        createCheckoutUrlRequest.currency = "<CURRENCY>"
        createCheckoutUrlRequest.amount = "<AMOUNT>"
        createCheckoutUrlRequest.cancelUrl = "<CANCEL_URL>" // Eg. https://demo.store/api/cancelOrder
        createCheckoutUrlRequest.successUrl = "<SUCCESS_URL>" // Eg. https://demo.store/api/completeOrder
        createCheckoutUrlRequest.token = '<TOKEN>'; // string | Replace <TOKEN>  by anyone of the following values: 'ETH' or 'XDAI' or 'XDAIT' or ECR-20 Contract Address or 'RBTC' or RSK ECR-20 Contract Address or 'Asset ID' of Algorand Standard Asset. | Optional

        createCheckoutUrlRequest.chain = chain;

        const response = await bleumiPay.createCheckoutUrl(createCheckoutUrlRequest);
        const createCheckoutUrlResponse = response.body;
        console.log(JSON.stringify(createCheckoutUrlResponse));
    } catch (err) {
        if (err.response) {
            console.error('Error statusCode:', err.response.statusCode);
            console.error('Error reponse:', err.response.body);
        } 
        console.log('Error message:',err.message);
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateCheckoutUrlRequest**](CreateCheckoutUrlRequest.md)| Specify checkout URL creation parameters. |

### Return type

[**CreateCheckoutUrlResponse**](CreateCheckoutUrlResponse.md)

Field | Type | Description
----- | ----- | -----
id | string | Unique identifier generated for this checkout URL
url | string | URL for buyer to complete payment

Format - hmac.input GET parameter passed in successUrl

The hmac.input GET parameter passed to successUrl contains payment parameters as a pipe ('|') separated string in the following order,
<ul style="font-weight: 500">
        <li><b>Chain</b> - Please refer documentation for <a href="https://pay.bleumi.com/docs/#supported-networks" target="_blank">Supported Networks</a> </li>
        <li><b>Wallet Address</b></li>
        <li><b>Token</b><br> 
            <i>ETH</i> - for Ethereum<br> 
            <i>XDAI</i> - for xDai<br> 
            <i>XDAIT</i> - for xDai Testnet<br> 
            <i>ALGO</i> - for Algo <br> 
            <i>RBTC</i> - for R-BTC <br> 
            <i>&lt;asset id&gt;</i> - for Algorand Standard Asset <br> 
            <i>&lt;contract address of ERC-20 token&gt;</i> - for ERC-20; Please refer to <a href="https://pay.bleumi.com/docs/#erc-20" target="_blank">ERC-20 Tokens</a> for contract address;<br> 
            <i>&lt;contract address of RSK ERC-20 token&gt;</i> - for RSK ERC-20; Please refer to <a href="https://pay.bugnet.work/docs/#rsk-tokens-erc-20" target="_blank">RSK ERC-20 Tokens</a> for contract address;<br> 
        </li>
        <li><b>Amount</b> - Token amount for the payment</li>
        <li><b>Number of block confirmations</b><br> 
        <li><b>Transaction Hash</b><br> 
        </li>
    </li>
</ul>

Call [Validate a Checkout Payment](#validateCheckoutPayment) endpoint to validate the GET parameters passed in successUrl and then cross-check the payment parameters of hmac.input GET parameter with your database.


### 400 Errors

The following table is a list of possible error codes that can be returned, along with additional information about how to resolve them for a response with 400 status code.

errorCode <br> <i>errorMessage</i> | Description
---- | ----
ValidationError <br> <i>&lt;details&gt;</i> | Details on input which does not conform to the above schema
ValidationError <br> <i>no_tokens_defined</i> | Please configure tokens for the Hosted Checkout in your account in the <a href="https://pay.bleumi.com/app/" target="_blank">Bleumi Pay Dashboard</a>
ValidationError <br> <i>no_tokens_defined_for_currency</i> | No tokens have been defined in your account for the specified currency
ValidationError <br> <i>invalid_token</i> | The token provided is not valid for the specified currency

<a name="listTokens"></a>
# **listTokens**
> Array<CheckoutToken> listTokens()

This method retrieves all tokens configured for the Hosted Checkout in your account in the <a href="https://pay.bleumi.com/app/" target="_blank">Bleumi Pay Dashboard</a>.

### Example
```javascript

import { HostedCheckoutsApi, HostedCheckoutsApiApiKeys } from '@bleumi/pay-sdk';

// Instantiate client
const bleumiPay = new HostedCheckoutsApi();

async function listTokens() {
    try {
        bleumiPay.setApiKey(HostedCheckoutsApiApiKeys.ApiKeyAuth, '<YOUR_API_KEY>'); //Replace <YOUR_API_KEY> with your actual API key

        const response = await bleumiPay.listTokens();
        const listOutput = response.body;
        console.log(JSON.stringify(listOutput));
    } catch (err) {
        console.error('Error statusCode:', err.response.statusCode);
        console.error('Error reponse:', err.response.body);
    }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Array&lt;CheckoutToken&gt;**](CheckoutToken.md)

### 400 Errors

The following table is a list of possible error codes that can be returned, along with additional information about how to resolve them for a response with 400 status code.

errorCode <br> <i>errorMessage</i> | Description
---- | ----
ValidationError <br> <i>no_tokens_defined</i> | No tokens have been defined in your account

<a name="validateCheckoutPayment"></a>
# **validateCheckoutPayment**
> ValidateCheckoutResponse validateCheckoutPayment(body)

This method is used to validate payment data returned by the Hosted Checkout upon successfully completing payment.

### Example
```javascript

import { HostedCheckoutsApi, HostedCheckoutsApiApiKeys, ValidateCheckoutRequest } from '@bleumi/pay-sdk';

// Instantiate client
const bleumiPay = new HostedCheckoutsApi();

async function validateCheckoutPayment() {
    try {
        bleumiPay.setApiKey(HostedCheckoutsApiApiKeys.ApiKeyAuth, '<YOUR_API_KEY>'); //Replace <YOUR_API_KEY> with your actual API key
        const validateCheckoutRequest = new ValidateCheckoutRequest();
		
        validateCheckoutRequest.hmacInput = "<INPUT>";  // Eg. rsk_testnet|0xbed61c55cc290b55c1c4c327148bdede56a831f4|0xb9f624160bb2755aa25366cc307ed27e39a4f296|10|0|0x16e54beb3ea4b4206b62ca32b1d2cf4ad15d9af2234564c2166ff3ccc817d5c1
        validateCheckoutRequest.hmacKeyId = "<KEY_ID>"; // Eg. v1
        validateCheckoutRequest.hmacAlg = "<ALG>"; // Eg. HMAC-SHA256-HEX
        validateCheckoutRequest.hmacValue = "<VALUE>"; // Eg. c782cbad4394383599b7cf9f9d62990f289649b35edd82cd1c7d58dd65e9fc03

		// Validate the GET parameters passed by Hosted Checkout in successUrl upon successfully completing payment.
        const response = await bleumiPay.validateCheckoutPayment(validateCheckoutRequest);
        const checkoutOutput = response.body;
        console.log(JSON.stringify(checkoutOutput));
    } catch (err) {
        console.error('Error statusCode:', err.response.statusCode);
        console.error('Error reponse:', err.response.body);
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ValidateCheckoutRequest**](ValidateCheckoutRequest.md)| Request body - used to specify validation of checkout parameters. |

### Return type

[**ValidateCheckoutResponse**](ValidateCheckoutResponse.md)

Field | Type | Description
----- | ----- | -----
valid | boolean | <b>true</b> - The data has been generated by Bleumi Pay <br> <b>false</b> - The data has not been generated by Bleumi Pay, the payment must be treated as unpaid

### 400 Errors

The following table is a list of possible error codes that can be returned, along with additional information about how to resolve them for a response with 400 status code.

errorCode <br> <i>errorMessage</i> | Description
---- | ----
ValidationError <br> <i>&lt;details&gt;</i> | Details on input which does not conform to the above schema