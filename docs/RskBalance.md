# RskBalance

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rsk** <br>(Optional)| [**object&lt;string, WalletBalance&gt;**](WalletBalance.md) | A dictionary which gives the token balances in RSK MainNet |
**rskTestnet** <br>(Optional)| [**object&lt;string, WalletBalance&gt;**](WalletBalance.md) | A dictionary which gives the token balances in RSK TestNet  |

## Example

```json
{
    "rsk": {
        "rsk_testnet": {
            "0xb9f624160bb2755aa25366cc307ed27e39a4f296": {
                "token_decimals": 6,
                "balance": "10",
                "safety": "high",
                "token_balance": "10000000",
                "blockNum": "879406"
            }
        }
    }
}
```