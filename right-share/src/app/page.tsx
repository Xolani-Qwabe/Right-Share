import { connectWithInfura } from '../../utils/infuraConnect';
import WalletConnect from './connect-wallet/page'; 

const Home = async () => {
  let chainName: string | null = null;
  let isConnected: boolean = false;

  try {
  
    const infuraProvider = await connectWithInfura();
    if (infuraProvider) {
      const network = infuraProvider.chain; // Access the chain property directly
      if (network) {
        chainName = network.name;
      }
      isConnected = true;
    }
  } catch (error) {
    console.error('Error connecting to Infura:', error);
  }

  return (
    <div>
      <h1>Home</h1>
      {isConnected ? (
        <p>Connected to chain ID: {chainName}</p>
      ) : (
        <p>Connecting to network...</p>
      )}
      <WalletConnect />
    </div>
  );
};

export default Home;
