# PaginatedWallets

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**Wallet[]**](Wallet.md) | List of wallets in the current page | The list is restricted to a maximum of 10 wallets. If there are more wallets a cursor is passed in the 'nextToken' field.
**nextToken** | **string** | Cursor to fetch next page of results, empty if no more results |  [optional]  Passing this as the 'nextToken' query parameter will fetch the next page.
