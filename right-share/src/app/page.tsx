import { connectWithInfura } from '../../utils/infuraConnect';
import WalletConnect from './connect-wallet/page';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'



const Home = async () => {
  let chainName: string | null = null;
  let isConnected: boolean = false;

  try {

    const infuraProvider = await connectWithInfura();
    if (infuraProvider) {
      const network = infuraProvider.chain;
      if (network) {
        chainName = network.name;
      }
      isConnected = true;
    }
  } catch (error) {
    console.error('Error connecting to Infura:', error);
  }

  return (
    <div className="flex flex-col items-center justify-center mx-auto w-4/5 min-h-screen bg-[url('/hero.jpg')] bg-cover bg-center rounded-t-[64px] text-slate-900 font-sans">
      <div className="w-[50%] h-full p-1 flex items-center justify-start">
        <h1 className="text-8xl font-extrabold">
          Re-Imagining Music Ownership Fans as Patrons, Artists in Control
        </h1>
      </div>

      {isConnected ? (
        <p className="fixed top-0 left-2 transform  text-blue-300 p-2 rounded-md shadow-md">
          Connected Network: {chainName}
        </p>
      ) : (
        <p className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-md shadow-md">
          Connecting to network...
        </p>
      )}

    </div>
  );
};

export default Home;
