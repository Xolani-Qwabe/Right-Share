'use client';

import { useState, useEffect } from 'react';
import { createWalletClient, custom } from 'viem';
import { mainnet } from 'viem/chains';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet, faLink } from '@fortawesome/free-solid-svg-icons'

declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
    };
  }
}

const WalletConnect: React.FC = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.ethereum) {
      console.log('MetaMask detected');
    } else {
      console.log('MetaMask is not installed');
    }
  }, []);

  const connectWallet = async () => {
    if (isConnecting) return;

    try {
      setIsConnecting(true);
      if (!window.ethereum) throw new Error('Ethereum provider not found');
      
      const client = createWalletClient({
        chain: mainnet,
        transport: custom(window.ethereum),
      });
      
      const [address] = await client.requestAddresses();
      setAccount(address);
    } catch (error) {
      console.error('Error connecting to wallet:', error);
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <button onClick={connectWallet} disabled={isConnecting} className='flex gap-2 p-3 cursor-pointer border-3 rounded-4xl  text-blue-400 flex items-center'>
      {account ? `Connected: ${account}` : isConnecting ? '...' : <FontAwesomeIcon icon={faLink} className='text-1xl'/>}
      <FontAwesomeIcon icon={faWallet} className='text-1xl'/>
    </button>
  );
};

export default WalletConnect;
