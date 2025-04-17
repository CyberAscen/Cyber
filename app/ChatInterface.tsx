import React, { useEffect } from 'react'; // Import useEffect

// Adjust import paths based on your actual project structure

// Import necessary hooks from your config
// Added useAppKitNetwork to get chainId
import { useAppKitAccount, useDisconnect, useAppKitNetwork } from '../config/index'; // Adjust path

/**
 * Represents the structure for a single token's information and balance.
 */
interface TokenBalance {
  contractAddress: string; // Address of the token contract
  name: string;          // Full name of the token (e.g., "USD Coin")
  symbol: string;        // Token symbol (e.g., "USDC")
  decimals: number;      // Token decimals (e.g., 6 for USDC)
  balance: string;       // User's balance of this token (formatted string)
  rawBalance?: string;     // User's balance in raw units (string, optional)
  logoURI?: string;       // URL for the token's logo (optional)
}

/**
 * Fetches the native balance for a given address and chainId.
 * THIS IS A PLACEHOLDER FUNCTION.
 * You MUST implement the actual logic based on the chainId
 * using libraries exposed by AppKit adapters (Wagmi, Solana/web3.js, etc.).
 * Without implementation, this function will return null.
 *
 * @param address The wallet address.
 * @param chainId The chain ID.
 * @returns Promise<string | null> The balance as a string, or null if fetching fails or is not implemented.
 */
async function fetchNativeBalance(address: string, chainId: number | string | undefined): Promise<string | null> {
  console.log(`Attempting to fetch native balance for ${address} on chain ${chainId}`);
  if (!address || !chainId) return null;

  try {
    // --- Chain-Specific Logic (Implement Real Fetching Here) ---
    // ... placeholder comments remain the same ...
    // --- End Chain-Specific Logic ---

    console.warn(`fetchNativeBalance: No implementation for chainId ${chainId}. Returning null.`);
    return null;

  } catch (error) {
    console.error("Error fetching native balance:", error);
    return null;
  }
}

/**
 * Fetches the token list with balances for a given address and chainId.
 * THIS IS A PLACEHOLDER FUNCTION.
 * Implementation is complex and chain-specific, often requiring
 * interaction with multiple contracts or third-party APIs (like Alchemy, Moralis, Covalent).
 * Without implementation, this function will return null.
 *
 * @param address The wallet address.
 * @param chainId The chain ID.
 * @returns Promise<TokenBalance[] | null> An array of token balance objects, or null if fetching fails or is not implemented.
 */
async function fetchTokenList(address: string, chainId: number | string | undefined): Promise<TokenBalance[] | null> {
  console.log(`Attempting to fetch token list for ${address} on chain ${chainId}`);
  if (!address || !chainId) return null;

  try {
    // --- Chain-Specific Logic (Implement Real Fetching Here) ---
    // ... placeholder comments remain the same ...
    // --- End Chain-Specific Logic ---

     console.warn(`fetchTokenList: No implementation for chainId ${chainId}. Returning null.`);
    return null;

  } catch (error) {
    console.error("Error fetching token list:", error);
    return null;
  }
}


/**
 * Component responsible for rendering either the AppKit connect buttons
 * or the user's account information based on the wallet connection status.
 * Also sends connection data (attempting real fetches) to the backend when the wallet connects.
 */
function WalletConnectArea() {
  // --- Get AppKit account status and disconnect function ---
  // Removed chainId from here
  const { address, isConnected, status } = useAppKitAccount();
  const { disconnect } = useDisconnect();
  // --- Get network information (including chainId) ---
  const { chain } = useAppKitNetwork(); // Use useAppKitNetwork hook
  const currentChainId = chain?.id; // Extract chainId from the network state
  // --- End AppKit hooks ---

  // --- Helper logic ---
  const shortAddress = address ? `${address.substring(0, 6)}...${address.substring(address.length - 4)}` : 'N/A';
  // --- End helper logic ---

  // --- Effect to send data to backend on successful connection ---
  useEffect(() => {
    // Use currentChainId obtained from useAppKitNetwork
    if (isConnected && address && typeof currentChainId !== 'undefined' && currentChainId !== null) {
      console.log(`Wallet connected on chain ${currentChainId}. Attempting to fetch real data and send to backend.`);

      const sendWalletData = async () => {
        // Pass currentChainId to fetching functions
        const balance = await fetchNativeBalance(address, currentChainId);
        const tokens = await fetchTokenList(address, currentChainId);

        // Prepare data payload using currentChainId
        const payload = {
          address: address,
          chainId: currentChainId, // Use chainId from network hook
          connectionTime: new Date().toISOString(),
          nativeBalance: balance, // null if not fetched
          tokens: tokens,       // null if not fetched
          status: 'connected'
        };

        console.log('Sending payload to backend:', payload);

        try {
          const response = await fetch('/api/wallet-connect', { // <-- YOUR BACKEND API URL
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          });

          if (!response.ok) {
            console.error('Backend API error:', response.status, await response.text());
          } else {
            const result = await response.json();
            console.log('Backend API success:', result);
          }
        } catch (error) {
          console.error('Error sending data to backend API:', error);
        }
      };
      sendWalletData();
    }
    // Update dependencies to include currentChainId from useAppKitNetwork
  }, [isConnected, address, currentChainId]);
  // --- End Effect ---


  return (
    <div className="absolute top-4 right-4 z-30">
      {isConnected ? (
        // --- Account Info JSX ---
        <div className="p-3 border border-white/30 rounded-lg shadow-lg bg-white/10 backdrop-blur-md text-white text-sm flex flex-col gap-2 items-start">
          <p>
            <span className="font-medium">Status:</span> <span className="text-green-400">{status}</span>
          </p>
          <p>
            <span className="font-medium">Address:</span>{' '}
            <code className="bg-black/20 p-1 rounded text-xs">{shortAddress}</code>
          </p>
          {/* Display currentChainId obtained from useAppKitNetwork */}
          {currentChainId && (
             <p>
               <span className="font-medium">Chain ID:</span> {currentChainId}
             </p>
          )}
          <button
            onClick={() => disconnect()}
            className="w-full mt-1 bg-red-500/50 hover:bg-red-500/80 text-white font-semibold py-1 px-3 rounded text-xs transition duration-200 ease-in-out"
          >
            Disconnect
          </button>
        </div>
        // --- End Account Info JSX ---
      ) : (
        // If not connected, show the AppKit connect buttons
        <div className="appkit-buttons-container flex gap-2">
          <appkit-button />
          <appkit-network-button />
        </div>
      )}
    </div>
  );
}

export default WalletConnectArea;
