# CheckoutToken

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Network** | **string** | The network in which the token is defined |
**Chain** | **string** | The chain in which the token is defined | 
**TransferAddress** | **string** | The destination address when payments are received in this token |
**Name** | **string** | Name of the token | 
**Symbol** | **string** | Symbol of the token | 
**Decimals** | **number** | The decimal places supported | 

## Example

```json
{
      "network": "ethereum",
      "chain": "goerli",
      "transferAddress": "0xd15bdd17175825742a5904b21008dd3a019a060e",
      "name": "USD p18",
      "symbol": "USD18",
      "decimals": 18
}
```