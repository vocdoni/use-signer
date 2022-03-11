import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UseSignerProvider } from "../..";
import { IProviderOptions } from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

function MyApp({ Component, pageProps }: AppProps) {
  // Inject at the root of your app
  const providerOptions: IProviderOptions = {
    // metamask: {},
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: "INFURA_ID",
      },
    },
    // Add more here
  };
  return (
    <UseSignerProvider providerOptions={providerOptions} defaultChainId={1}>
      <Component {...pageProps} />
    </UseSignerProvider>
  );
}
export default MyApp;
