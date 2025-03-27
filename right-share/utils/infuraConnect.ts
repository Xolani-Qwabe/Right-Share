import { createPublicClient, http } from 'viem';
import { avalancheFuji } from 'viem/chains';
import dotenv from 'dotenv';


dotenv.config();

const INFURA_ID = process.env.NEXT_PUBLIC_INFURA_ID;
const AVALANCHE_FUJI_RPC_URL = `https://avalanche-fuji.infura.io/v3/${INFURA_ID}`;

export const connectWithInfura = async () => {
  try {
    if (!INFURA_ID) {
      throw new Error('Infura ID is not defined in environment variables');
    }

    const client = createPublicClient({
      chain: avalancheFuji,
      transport: http(AVALANCHE_FUJI_RPC_URL),
    });

    const network = await client.getChainId();
    console.log('Connected to Avalanche Fuji via Infura, Chain ID:', network);
    
    return client;
  } catch (error) {
    console.error('Error connecting to Infura:', error);
    return null;
  }
};
