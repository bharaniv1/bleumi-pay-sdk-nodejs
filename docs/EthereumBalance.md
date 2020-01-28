# bleumi.pay.Model.EthereumBalance
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Mainnet** (optional) | [**object&lt;string, WalletBalance&gt;**](WalletBalance.md) | A dictionary which gives the token balances in Ethereum MainNet |
**Goerli** (optional) | [**object&lt;string, WalletBalance&gt;**](WalletBalance.md) | A dictionary which gives the token balances in Ethereum Goerli TestNet |
**Xdai** (optional) | [**object&lt;string, WalletBalance&gt;**](WalletBalance.md) | A dictionary which gives the token balances in xDAI | 
**XdaiTestnet** (optional) | [**object&lt;string, WalletBalance&gt;**](WalletBalance.md) | A dictionary which gives the token balances in xDAI TestNet |


## Example - Goerli - TestNet

```json
{
    "balances": {
        "ethereum": {
            "goerli": {
                "0x115615dbd0f835344725146fa6343219315f15e5": {
                    "blockNum": "2049977",
                    "token_balance": "10000000",
                    "balance": "10",
                    "token_decimals": 6
                }
            }
        }
    }
}
```
