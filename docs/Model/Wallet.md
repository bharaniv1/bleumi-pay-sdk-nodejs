# Wallet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique ID identifying the wallet; specified when it was created by your system |
**chain** | **string** | Ethereum network in which wallet is to be created. Please refer to the [network list](https://pay.bleumi.com/docs/#supported-ethereum-networks) |
**addr** | **string** | Wallet address |
**balances** | [**map[string,WalletBalance]**](WalletBalance.md) | Dictionary of balance/token-digits/token-balance for each ECR-20 token in the wallet. Key is the ERC-20 contract. |
**inputs** | [**WalletInputs**](WalletInputs.md) | The parameters used to interact with the [payment processor](https://pay.bleumi.com/docs/#universal-master-contract-addresses) on the ethereum network |
**createdAt** | **int** | UNIX timestamp when the wallet was created |
**updatedAt** | **int** | UNIX timestamp when the lastest operation was performed |



