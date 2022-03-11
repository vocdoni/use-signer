import { useSigner } from "../..";

const Page = () => {
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

export default Page;
