# useSigner

Use signer is a React Hook designed to provide convenient access to a
[web3modal](https://github.com/Web3Modal/web3modal).

## Features

- Select a wallet from the available ones
- Disconnect from a wallet
- Get access to an [ethers.js](https://docs.ethers.io/v5/) [Signer](https://docs.ethers.io/v5/api/signer/#signers) and [Provider](https://docs.ethers.io/v5/api/providers/#providers)
- Get the wallet `address`, the network `chainId` and the current wallet `status`

## Get started

Install the library on your project:

```sh
npm install use-signer
```

## Usage

Add the provider at the root of your React app

```tsx
import { useSigner, UseSignerProvider } from "use-signer";
import { IProviderOptions } from "web3modal";

const App = () => {
  return (
    <UseSignerProvider>
      <AppBody />
    </UseSignerProvider>
  );
};
```

Optionally, [parameterize the wallets](https://github.com/Web3Modal/web3modal#custom-display) shown by `web3modal`:

```tsx
import { useSigner, UseSignerProvider } from "use-signer";
import { IProviderOptions } from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

const App = () => {
  const DEFAULT_CHAIN_ID = 1;
  // Customize the wallets you support
  // See: https://github.com/Web3Modal/web3modal#custom-provider
  const providerOptions: IProviderOptions = {
    metamask: {
      // custom settings
    }
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: "1234...",
      },
    },
  };
  return (
    <UseSignerProvider providerOptions={providerOptions} defaultChainId={1}>
      <AppBody />
    </UseSignerProvider>
  );
};
```

Use the hook on any child component:

```tsx
const AppBody = () => {
  const { provider, signer, status, address, chainId, methods } = useSigner();

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <h2>Use Signer example</h2>

      <p>{provider ? "Provider available" : "No provider"}</p>
      <p>{signer ? "Signer available" : "No signer"}</p>
      <p>Status: {status}</p>
      <p>Address: {address}</p>
      <p>Chain ID: {chainId}</p>

      <div>
        {status === "disconnected"
          ? <button onClick={methods.selectWallet}>Connect wallet</button>
          : status === "connected"
          ? <button onClick={methods.disconnect}>Disconnect</button>
          : <span>Connecting...</span>}
      </div>
    </div>
  );
};
```

## Available commands

```sh
yarn build
yarn lint
yarn lint -- --fix
yarn size
yarn start
yarn test
```

## Example

Check out the `example` folder:

```sh
cd example
yarn
yarn start
```

Navigate to `localhost:1234`
