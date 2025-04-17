'use client'

import React, { type ReactNode } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type Config, WagmiProvider, cookieToInitialState } from 'wagmi'

import { mainnet } from '@reown/appkit/networks'
import { createAppKit } from '@reown/appkit/react'

import { networks, projectId, wagmiAdapter } from '../config/index'

// Set up queryClient
const queryClient = new QueryClient()

if (!projectId) {
  throw new Error('Project ID is not defined')
}

// Set up metadata
export const appKitMetadata = {
  name: 'tempo vedio',
  logo: 'https://tempo-vedio.xyz/ryf.png',
  description: 'Redefining creative ownership through AI-generated dance, blockchain transparency, and decentralized collaboration',  
  url: 'https://tempo-vedio.xyz', // origin must match your domain & subdomain
  icons: ['https://tempo-vedio.xyz/ryf.png'],
  keywords: ['tempo vedio', 'web3', 'dance metaverse', 'AI-generated dance', 'blockchain', 'decentralized collaboration'],
  themeColor: '#000000', // Optional - defaults to #000000
}

// Create the modal
export const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks,
  defaultNetwork: mainnet,
  metadata: appKitMetadata,
  themeMode: 'light',
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})

function ContextProvider({ children, cookies }: { children: ReactNode; cookies: string | null }) {
  const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config, cookies)

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig as Config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
           {children}
       </QueryClientProvider>
    </WagmiProvider>
  )
}

export default ContextProvider
