# PaymentAddresses

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ethereum** <br> (Optional)| [**EthereumAddress**](EthereumAddress.md) | A dictionary which gives the address of the wallet generated for each Ethereum network  | 
**algorand** <br> (Optional)| [**AlgorandAddress**](AlgorandAddress.md) | A dictionary which gives the address of the wallet generated for each Algorand network  | 
**rsk** <br> (Optional)| [**RskAddress**](RskAddress.md) | A dictionary which gives the address of the wallet generated for each RSK network  |

## Example

```json
{
    "ethereum": {
      "xdai_testnet": {
        "0x13e4acefe6a6700604929946e70e6443e4e73447|0x13e4acefe6a6700604929946e70e6443e4e73447":{
          "addr": "0xbe1fa332f24ba568108ba55a25eccf93d882f54e",
          "inputs": {
            "buyer": "0x13e4acefe6a6700604929946e70e6443e4e73447",
            "walletLibrary": "0xb33893fdf59b634653fcbed27b5d38d86710fc40",
            "merchant": "0x13e4acefe6a6700604929946e70e6443e4e73447",
            "salt": "0x4d5afc486391108fd9af8e33cec2caa8038899c7974fae22a3c3bb0d127ab8a7",
            "walletProxy": "0xfaac6b338f79cfd8a53dfec95263f12ef046a049"
          }
        }
      }
    },
    "algorand": {
      "alg_testnet": {
        "IZYYKSQO3GRZQ4SMAUVV5SVK6N7WUIDBZJCVZEVCHJ2XO22ARMQ3IEEGAQ|QTYQRYMFCS5FT63RUZXBR3MKEEQLHKMHMGMYS4UAPM5CKK27KELGP62QUY": {
          "addr": "BE2CX2DSRWNNQH6YEAEIDCXKESHJMJTL7BA7U74RUXBEOPLYV4JQA26XXI",
          "inputs": {
            "merchant": "IZYYKSQO3GRZQ4SMAUVV5SVK6N7WUIDBZJCVZEVCHJ2XO22ARMQ3IEEGAQ",
            "salt": "b73cb93c774b6c5fa4fcf2e02acff50fK9gTTRyoF64g1YANSZcydHjzXbRyfCPQNxpDIBegczRdb6Oosfr18g==",
            "gas": "ARHKCC34GGEDB7ZZE73QMAUKWNXAK3SZWDRECYRVN6AXTPQ7JTFSRDEYCI",
            "programBytes": "ASYHIEZxhUoO2aOYckwFK17KqvN/aiBhykVckqI6dXdrQIshIITxCOGFFLpZ+3GmbhjtiiEgs6mHYZmJcoB7OiUrX1EWIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAROoQt8MYgw/zkn9wYCirNuBW5ZsOJBYjVvgXm+H0zLA3BheQVheGZlciDb1gr1RfLUa+ziM7438kcaEMopE3DXemdxEpiWWKhvkzEHKBIxBykSETEJKhIxCSgSMQkpEhExCSsSEREQMQ8nBBIQMRQoEjEUKRIRMRUqEjEVKBIxFSkSEREQMQ8nBRIQETEFAScGEhAxFDEAEhE=",
            "buyer": "QTYQRYMFCS5FT63RUZXBR3MKEEQLHKMHMGMYS4UAPM5CKK27KELGP62QUY"
          }
        }
      }
    }
}
```
