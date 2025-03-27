'use client';

import { useState, useEffect } from 'react';
import { createWalletClient, custom } from 'viem';
import { mainnet } from 'viem/chains';

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
    <button onClick={connectWallet} disabled={isConnecting}>
      {account ? `Connected: ${account}` : isConnecting ? 'Connecting...' : 'Connect Wallet'}
    </button>
  );
};

export default WalletConnect;
