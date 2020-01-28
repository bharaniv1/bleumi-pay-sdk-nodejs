# PayoutsApi

Payouts are available only for the Ethereum and xDAI networks today and require you to set up a Private Payment Processor and link it to your account. Please contact support@bleumi.com if you want to enable payouts for your account.

<a name="createPayout"></a>
# **createPayout**
> CreatePayoutResponse createPayout(body, chain)

This method makes a payout from your Private Payment Processor.

### Example
```javascript

import { PayoutsApi, PayoutsApiApiKeys } from '@bleumi/pay-sdk';
import { CreatePayoutRequest, Chain } from '@bleumi/pay-sdk';

// Instantiate clients
const bleumiPay = new PayoutsApi();

async function createPayoutRequest(id: string) {
    try {
        bleumiPay.setApiKey(PayoutsApiApiKeys.ApiKeyAuth, '<YOUR_API_KEY>'); //Replace <YOUR_API_KEY> with your actual API key
		// This example shows 2 payouts being created

		const createPayoutRequest = new CreatePayoutRequest();
        payoutRcreatePayoutRequesteq.txid = id; // string | Replace with unique payout ID 
        createPayoutRequest.token = "<TOKEN>"; // string | Optional | Replace <TOKEN> with "ALGO" or "ETH" or "XDAI" or "XDAIT" or ERC-20 'Token Contract Address' or 'Algorand Standard Asset token'
		
		createPayoutRequest.payouts = [
            {
                "transferAddress": "<ADDR_1>",
                "amount": "<AMOUNT_1>"
            },
            {
                "transferAddress": "<ADDR_2>",
                "amount": "<AMOUNT_2>"
            }
        ]

        const chain = Chain.Goerli; // Specify the chain for payout creation
        const response = await bleumiPay.createPayout(createPayoutRequest, chain);
        const createPayoutResponse = response.body;
        console.log(JSON.stringify(createPayoutResponse));
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
 **body** | [**CreatePayoutRequest**](CreatePayoutRequest.md)| Specify payout creation parameters. |
 **chain** | [**Chain**](Chain.md)| Network in which the payout is to be made. Please refer documentation for [Supported Networks](https://pay.bleumi.com/docs/#supported-networks) |

### Return type

[**CreatePayoutResponse**](CreatePayoutResponse.md)

Field | Type | Description
----- | ----- | -----
salt | string | Unique id generated for the given txid

### 400 Errors

The following table is a list of possible error codes that can be returned, along with additional information about how to resolve them for a response with 400 status code.

errorCode <br> <i>errorMessage</i> | Description
---- | ----
ValidationError <br> <i>&lt;details&gt;</i> | Details on input which does not conform to the above schema
ValidationError <br> <i>invalid_token</i> | Provided token is not valid for the specified 'chain'
ValidationError <br> <i>no_gas_accounts</i> | No active gas accounts present in your account. Please activate at least one gas account from the <a href="https://pay.bleumi.com/app/" target="_blank">Bleumi Pay Dashboard</a>.
ValidationError <br> <i>txid_already_exists</i> | The 'txid' provided has been used previously
ValidationError <br> <i>not_whitelisted&#124;&lt;addr&gt;</i> | The &lt;addr&gt; provided has not been whitelisted in your Private Payment Processor
ValidationError <br> <i>payouts_requires_private_payment_processor</i> | Private Payment Processor is not set up and linked to your account


<a name="listPayouts"></a>
# **listPayouts**
> PaginatedPayoutItems listPayouts(nextToken, sortBy, startAt, endAt)

This method retrieves all payouts created.

### Pagination

The list of payouts is returned as an array in the 'results' field. The list is restricted to a maximum of 10 payouts per page.

If there are more than 10 payouts, a cursor is returned in the 'nextToken' field. Passing this as the 'nextToken' query parameter will fetch the next page. 

When the value of 'nextToken' field is an empty string, there are no more payouts.

### Example
```javascript

import { PayoutsApi, PayoutsApiApiKeys } from '@bleumi/pay-sdk';

// Instantiate clients
const bleumiPay = new PayoutsApi();

async function listPayouts() {
    try {
        const nextToken = ""; // string | Cursor to start results from
        const sortBy = "<SORT_BY>"; // string | Sort payouts by | Eg. "createdAt"
        const startAt = "<START_TIMESTAMP>"; // string | Get payouts from this timestamp | Eg. 1546300800 for 1-JAN-2019
        const endAt = undefined; // string | Get payouts till this timestamp
        bleumiPay.setApiKey(PayoutsApiApiKeys.ApiKeyAuth, '<YOUR_API_KEY>'); //Replace <YOUR_API_KEY> with your actual API key
        const response = await bleumiPay.listPayouts(nextToken, sortBy, startAt, endAt);
        const paginatedPayouts = response.body;
        console.log(JSON.stringify(paginatedPayouts));
    } catch (err) {
        console.error('Error statusCode:', err.response.statusCode);
        console.error('Error reponse:', err.response.body);
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nextToken** | **string**| Cursor to start results from | [optional]
 **sortBy** | **string**| Sort payments by | [optional] 'createdAt' - results will be sorted by created time in ascending order. <br>'updatedAt' - results will be sorted by last updated time in ascending order.
 **startAt** | **string**| Get payouts from this timestamp (unix) | [optional]
 **endAt** | **string**| Get payouts till this timestamp (unix) | [optional]

### Return type

[**PaginatedPayoutItems**](PaginatedPayoutItems.md)
