import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { useSigner, UseSignerProvider } from "../.";
import { IProviderOptions } from "web3modal";
// import WalletConnectProvider from "@walletconnect/web3-provider";

const App = () => {
  const providerOptions: IProviderOptions = {
    metamask: {
      display: {
        name: "Metamask name",
        description: "My description",
        logo: "https://host/image.png",
      },
      package: null,
    },
    // walletconnect: {
    //   package: WalletConnectProvider,
    //   options: {
    //     infuraId: "1234",
    //   },
    // },
  };
  return (
    <UseSignerProvider providerOptions={providerOptions} defaultChainId={1}>
      <Body />
    </UseSignerProvider>
  );
};

const Body = () => {
  const { provider, signer, status, address, chainId, methods } = useSigner();
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <h2>Use Signer example</h2>
      <p>{provider ? "Provider available" : "No provider"}</p>
      <p>{signer ? "Signer available" : "No signer"}</p>
      <p>Status: {status}</p>
      <p>Address: {address}</p>
      <p>Chain ID: {chainId}</p>
      <br />
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

ReactDOM.render(<App />, document.getElementById("root"));
