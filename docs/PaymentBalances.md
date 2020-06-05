# PaymentBalances

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ethereum** <br> (Optional) | [**object&lt;string, EthereumBalance&gt;**](EthereumBalance.md) | A dictionary which gives the token balances in each Ethereum network |
**algorand** <br> (Optional) | [**object&lt;string, AlgorandBalance&gt;**](AlgorandBalance.md) | A dictionary which gives the token balances in each Algorand network |
**rsk** <br> (Optional) | [**object&lt;string, RskBalance&gt;**](RskBalance.md) | A dictionary which gives the token balances in each RSK network |

## Example

```json
{
    "ethereum": {
        "xdai_testnet": {
            "XDAIT": {
                "balance": "1",
                "token_decimals": 15,
                "blockNum": "1698324",
                "safety": "high",
                "token_balance": "1000000000000000"
            }
        }
    }
}
```