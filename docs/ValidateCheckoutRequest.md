# ValidateCheckoutRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hmacInput** | **string** | Payment Details. Passed as GET parameter in successUrl. | 
**hmacKeyId** | **string** | KeyId used to generate the HMAC. Passed as GET parameter in successUrl. | 
**hmacAlg** | **string** | Algorithm used to generate the HMAC. Passed as GET parameter in successUrl. | 
**hmacValue** | **string** | HMAC passed as GET parameter in successUrl. | 


## Example

```json
{
    "hmac_input": "goerli|0xbe98e68c0ffbead18f94882b0f5d15eb31930cee|0x84df8548086ec9025e9c93297058bed706e90ddd|10|12",
    "hmac_keyId": "v1",
    "hmac_alg": "HMAC-SHA256-HEX",
    "hmac_value": "e842bb5f3f62319864293ecb7ccc01674a0af08e4e74a01ab16b2157c3fce5d6"
}
```