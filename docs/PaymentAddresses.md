# PaymentAddresses

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ethereum** <br> (Optional)| [**object&lt;string, EthereumWalletAddress&gt;**](EthereumWalletAddress.md) | A dictionary which gives the address of the wallet generated for each Ethereum network  | 
**algorand** <br> (Optional)| [**object&lt;string, AlgorandWalletAddress&gt;**](AlgorandWalletAddress.md) | A dictionary which gives the address of the wallet generated for each Algorand network  | 
**rsk** <br> (Optional)| [**object&lt;string, EthereumWalletAddress&gt;**](EthereumWalletAddress.md) | A dictionary which gives the address of the wallet generated for each RSK network  |

## Example

```json
{
    "ethereum": {
        "xdai_testnet": {
            "addr": "0xbe1fa332f24ba568108ba55a25eccf93d882f54e"
        },
        "goerli": {
            "addr": "0xbea2f9d56c3cc7f2c7e17d294200dd75708eecd8"
        }
    }
}
```