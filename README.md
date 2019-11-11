<img src="https://pay.bleumi.com/wp-content/uploads/2019/04/logo_dark_bleumi_invoice_6797x1122.png" height="30">


# Bleumi Pay SDK for NodeJS

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/bleumi/bleumi-pay-sdk-nodejs/master/LICENSE)

The Bleumi Pay SDK is a one-stop shop to help you integrate ERC-20 payments into your business or application. The SDK bundles [Bleumi Pay API](https://pay.bleumi.com/docs/#introduction) into one SDK to ease implementation and support.

bleumi-pay-sdk-nodejs is a TypeScrpit-NodeJS library that provides an interface between your NodeJS application and [Bleumi Pay API](https://pay.bleumi.com/docs/#introduction). This tutorial covers the basics, including examples, needed to use the SDK.

## Getting Started

The Bleumi Pay SDK for NodeJS bundles TypeScript definition files for use in TypeScript projects and to support tools that can read .d.ts files. Our goal is to keep these TypeScript definition files updated with each release for any public api.

### Pre-requisites

Before you can begin using these TypeScript definitions with your project, you need to make sure your project meets a few of these requirements:

#### Development Environment

* Use TypeScript v2.x
* Includes the TypeScript definitions for node. You can use npm to install this by typing the following into a terminal window:

    ```sh
    npm install --save-dev @types/node
    ```

* If you are targeting at es5 or older ECMA standards, your `tsconfig.json` has to include `'es5'` and `'es2015.promise'` under `compilerOptions.lib`.
 See [tsconfig.json](https://github.com/bleumi/bleumi-pay-sdk-nodejs/blob/master/tsconfig.json) for an example.

#### Obtain An API Key

Bleumi Pay SDK uses API keys to authenticate requests. You can obtain an API key through the [Bleumi Pay Dashboard](https://pay.bleumi.com/app/).

### Install Package

[![npm (scoped)](https://img.shields.io/npm/v/@bleumi/pay-sdk.svg)](https://www.npmjs.com/package/@bleumi/pay-sdk)

### In Node.js

```
npm install @bleumi/pay-sdk -g
```

### Run Sample Code

The following code generates a wallet to accept payment from the buyer specific for the ECR-20 Token.

```javascript
import { Erc20PaymentsApi, Erc20PaymentsApiApiKeys, WalletCreateInput, EthAddress, EthNetwork } from '@bleumi/pay-sdk';

// Instantiate client
const bleumiPay = new Erc20PaymentsApi();

async function generateWallet(id: string) {
    try {
        bleumiPay.setApiKey(Erc20PaymentsApiApiKeys.ApiKeyAuth, '<YOUR_API_KEY>')
        const buyer = new EthAddress('<BUYER_ADDR>');
        const merchant = new EthAddress('<MERCHANT_ADDR>');

        const walletCreateInput = new WalletCreateInput();
        walletCreateInput.id = id;
        walletCreateInput.buyerAddress = buyer;
        walletCreateInput.transferAddress = merchant;

        const chain = EthNetwork.Ropsten;
        const response = await bleumiPay.generateWallet(walletCreateInput, chain);
        const walletCreateOutput = response.body;
        console.log(JSON.stringify(walletCreateOutput));
    } catch (err) {
        console.error('Error statusCode:', err.response.statusCode);
        console.error('Error reponse:', err.response.body);
    }
}

```

More examples can be found under each method in [SDK Classes](README.md#sdk-classes) section.

## SDK Classes

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
Erc20PaymentsApi | [**generateWallet**](docs/Api/Erc20PaymentsApi.md#generatewallet) | **POST** /v1/payment/erc20/wallet | Generate an unique wallet address to accept payments for an ERC-20 token from a buyer
Erc20PaymentsApi | [**getWallet**](docs/Api/Erc20PaymentsApi.md#getwallet) | **GET** /v1/payment/erc20/wallet/{id} | Return a specific wallet
Erc20PaymentsApi | [**listWallets**](docs/Api/Erc20PaymentsApi.md#listwallets) | **GET** /v1/payment/erc20/wallet | Returns a list of wallets
Erc20PaymentsApi | [**settleWallet**](docs/Api/Erc20PaymentsApi.md#settlewallet) | **POST** /v1/payment/erc20/wallet/{id}/settle | Settle a payment, amount received will be transferred even if less than payment amount
Erc20PaymentsApi | [**refundWallet**](docs/Api/Erc20PaymentsApi.md#refundwallet) | **POST** /v1/payment/erc20/wallet/{id}/refund | Refund wallet
Erc20PaymentsApi | [**getWalletOperation**](docs/Api/Erc20PaymentsApi.md#getwalletoperation) | **GET** /v1/payment/erc20/wallet/{id}/operation/{txid} | Return a specific operation of the wallet
Erc20PaymentsApi | [**listWalletOperations**](docs/Api/Erc20PaymentsApi.md#listwalletoperations) | **GET** /v1/payment/erc20/wallet/{id}/operation | Return the list of operations performed by the mechant on a specific wallet

## Documentation For Models

 - [BadRequest](docs/Model/BadRequest.md)
 - [EthAddress](docs/Model/EthAddress.md)
 - [EthNetwork](docs/Model/EthNetwork.md)
 - [PaginatedWalletOperations](docs/Model/PaginatedWalletOperations.md)
 - [PaginatedWallets](docs/Model/PaginatedWallets.md)
 - [Wallet](docs/Model/Wallet.md)
 - [WalletBalance](docs/Model/WalletBalance.md)
 - [WalletCreateInput](docs/Model/WalletCreateInput.md)
 - [WalletCreateOutput](docs/Model/WalletCreateOutput.md)
 - [WalletInputs](docs/Model/WalletInputs.md)
 - [WalletOperation](docs/Model/WalletOperation.md)
 - [WalletOperationInputs](docs/Model/WalletOperationInputs.md)
 - [WalletOperationOutput](docs/Model/WalletOperationOutput.md)
 - [WalletRefundOperationInput](docs/Model/WalletRefundOperationInput.md)
 - [WalletSettleOperationInput](docs/Model/WalletSettleOperationInput.md)

## Limitations

 - [Bleumi Pay API Limits](https://pay.bleumi.com/docs/#api-limits)

## License

Copyright 2019 Bleumi, Inc.

Code licensed under the [MIT License](LICENSE).