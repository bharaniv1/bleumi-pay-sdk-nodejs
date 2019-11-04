# WalletOperation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique ID of the wallet; specified when it was created by your system | [optional]
**funcName** | **string** | The name of the function invoked on the payment processor |
**status** | **bool** | <b>null</b> - operation in progress <br/> <b>true</b> - operation completed successfuly <br/> <b>false</b> - operation failed to process  |
**inputs** | [**WalletOperationInputs**](WalletOperationInputs.md) | The parameters used to interact with the [payment processor](https://pay.bleumi.com/docs/#universal-master-contract-addresses) on the ethereum network |  
**hash** | **string** | Transaction hash of operation submitted to the network. This field is blank when operation is in progress. |
