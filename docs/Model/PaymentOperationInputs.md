# PaymentOperationInputs

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addr** | **string** | Address of the wallet | 
**amount** | **string** | Amount (Only for settle operation) | 
**token** | **string** | <b>ETH</b> - for Ethereum  <br/> <b>XDAI</b> - for xDai <br/> <b>XDAIT</b> - for xDai Testnet <br/> <b> &lt;contract address of ERC-20 token&gt;</b> - for ERC-20 Tokens  | 
**tokenAmount** | **string** | Token amount to be settled in network format (Only for settle operation) | 
**tokenDecimals** | **string** | Token decimal places (Only for settle operation) | 


## Settle Operation Example

```json
{
    "addr": "0xbec374e0acb4b7b6fde45b11287e61beb108e868",
    "amount": "10",
    "token": "0x115615dbd0f835344725146fa6343219315f15e5",
    "token_amount": "10000000",
    "token_decimals": 6
}
```

## Refund Operation Example

```json
{
    "addr": "0xbe1fa332f24ba568108ba55a25eccf93d882f54e",
    "token": "XDAIT"
}
```