# bleumi.pay.Model.AlgorandBalance
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AlgMainnet** (optional)| [**object&lt;string, WalletBalance&gt;**](WalletBalance.md) | A dictionary which gives the Wallet balances in each Algorand MainNet |   
**AlgTestnet** (optional)| [**object&lt;string, WalletBalance&gt;**](WalletBalance.md) | A dictionary which gives the Wallet balances in each Algorand TestNet | 


## Example - Algorand TestNet

```json 
{
    "balances": {
        "algorand": {
            "alg_testnet": {
                "ALGO": {
                    "blockNum": "4457461",
                    "token_balance": "10000000",
                    "balance": "10",
                    "safety": "high",
                    "token_decimals": 6
                }
            }
        }
    }
}
```