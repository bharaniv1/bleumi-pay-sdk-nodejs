# HostedCheckoutsApi

<a name="createCheckoutUrl"></a>
# **createCheckoutUrl**
> CreateCheckoutUrlResponse createCheckoutUrl(body)

This method generates a unique checkout URL to accept payment.

### Example
```javascript

import { HostedCheckoutsApi, HostedCheckoutsApiApiKeys } from '@bleumi/pay-sdk';

// Instantiate client
const bleumiPay = new HostedCheckoutsApi();

async function createCheckoutUrl(id: string) {
    try {
        bleumiPay.setApiKey(HostedCheckoutsApiApiKeys.ApiKeyAuth, apikey.dev) //Replace <YOUR_API_KEY> with your actual API key
        const buyer = new EthAddress('<BUYER_ADDR>'); // Replace <BUYER_ADDR> with the Buyer's Enthereum Network Address
        const chain = Chain.Ropsten;
        const token = new Token('<TOKEN>'); // string | The ECR-20 token to refund | Replace <TOKEN> with ETH or XDAI or ECR-20 token contract address or XDAIT

        const createCheckoutUrlRequest = new CreateCheckoutUrlRequest();

        createCheckoutUrlRequest.id = id
        createCheckoutUrlRequest.currency = "<CURRENCY>"
        createCheckoutUrlRequest.amount = "<AMOUNT>"
        createCheckoutUrlRequest.cancelUrl = "<CANCEL_URL>" // Eg. https://demo.store/api/cancelOrder
        createCheckoutUrlRequest.successUrl = "<SUCCESS_URL>" // Eg. https://demo.store/api/completeOrder
        createCheckoutUrlRequest.token = token
        createCheckoutUrlRequest.chain = chain;
        createCheckoutUrlRequest.buyerAddress = buyer;

        const response = await bleumiPay.createCheckoutUrl(createCheckoutUrlRequest);
        const createCheckoutUrlResponse = response.body;
        console.log(JSON.stringify(createCheckoutUrlResponse));
    } catch (err) {
        console.error('Error statusCode:', err.response.statusCode);
        console.error('Error reponse:', err.response.body);
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

### Format - hmac.input GET parameter passed in successUrl

The hmac.input GET parameter passed to successUrl contains payment parameters as a pipe ('|') separated string in the following order,
<ul style="font-weight: 500">
    <li><b>Chain</b> - Please refer documentation for <a href="https://pay.bleumi.com/docs/#supported-networks" target="_blank">Supported Networks</a> </li>
    <li><b>Wallet Address</b></li>
    <li><b>Token</b><br> <i>ETH</i> - for Ethereum<br> <i>XDAI</i> - for xDai<br> <i>XDAIT</i> - for xDai Testnet<br> <i>&lt;contract address of ERC-20 token&gt;</i> - for ERC-20; Please refer to [ERC-20 Tokens](/docs/#erc-20) for contract address;</li>
    <li><b>Amount</b> - Token amount for the payment</li>
    <li><b>Number of block confirmations</b><br> <i>12</i> - for ETH<br> <i>0</i> - for XDAI<br> <i>0</i> - for XDAIT<br> <i>12</i> - for ERC-20</li></li>
</ul>

<aside class="notice">
Call [Validate a Checkout Payment](#validateCheckoutPayment) endpoint to validate the GET parameters passed in successUrl and then cross-check the payment parameters of hmac.input GET parameter with your database.
</aside>


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
> CheckoutTokens listTokens()

This method retrieves all tokens configured for the Hosted Checkout in your account in the <a href="https://pay.bleumi.com/app/" target="_blank">Bleumi Pay Dashboard</a>.

### Example
```javascript

import { HostedCheckoutsApi, HostedCheckoutsApiApiKeys } from '@bleumi/pay-sdk';

// Instantiate client
const bleumiPay = new HostedCheckoutsApi();

async function listTokens() {
    try {
        bleumiPay.setApiKey(HostedCheckoutsApiApiKeys.ApiKeyAuth, apikey.dev) //Replace <YOUR_API_KEY> with your actual API key

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

[**CheckoutTokens**](CheckoutTokens.md)

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

import { HostedCheckoutsApi, HostedCheckoutsApiApiKeys } from '@bleumi/pay-sdk';

// Instantiate client
const bleumiPay = new HostedCheckoutsApi();

async function validateCheckoutPayment() {
    try {
        bleumiPay.setApiKey(HostedCheckoutsApiApiKeys.ApiKeyAuth, apikey.dev) //Replace <YOUR_API_KEY> with your actual API key
        const validateCheckoutRequest = new ValidateCheckoutRequest();
		
        validateCheckoutRequest.hmacInput = "<INPUT>";  // Eg. ropsten|0xbe33cde200e113f4847c66e9498f2c30e81635ad|0x115615dbd0f835344725146fa6343219315f15e5|10|12
        validateCheckoutRequest.hmacKeyId = "<KEY_ID>"; // Eg. v1
        validateCheckoutRequest.hmacAlg = "<ALG>"; // Eg. HMAC-SHA256-HEX
        validateCheckoutRequest.hmacValue = "<VALUE>"; // Eg. 0d910e8dfd087dd0d0b7c3f6504f7f4316b507afc81c09e844cfeee0f3dbaef6

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