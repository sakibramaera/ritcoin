// // 'use client'
// import { useContext, type ReactNode } from 'react'
// import { type State, WagmiProvider } from 'wagmi'
// import '@rainbow-me/rainbowkit/styles.css';
// import { useRouter } from 'next/router';
// import Sheild from '../icons/Sheild.svg'
 
// import Image from 'next/image';

// import {
//   RainbowKitProvider,
//   getDefaultWallets,
//   AvatarComponent,
//   getDefaultConfig,
//   Theme,
//   darkTheme,
//   lightTheme,
//   midnightTheme,
// } from '@rainbow-me/rainbowkit';
// import {
//   argentWallet,
//   trustWallet,
//   ledgerWallet,
// } from '@rainbow-me/rainbowkit/wallets';
 
// import {
//   polygon,
//   polygonMumbai
// } from 'wagmi/chains';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { Box, useTheme } from '@mui/material';


// const { wallets } = getDefaultWallets();

// export const config = getDefaultConfig({
//   appName: 'RainbowKit demo',
//   projectId: 'YOUR_PROJECT_ID',
//   wallets: [
//     ...wallets,
//     {
//       groupName: 'Other',
//       wallets: [argentWallet, trustWallet, ledgerWallet],
//     },
//   ],
//   chains: [
//     polygon,
//     polygonMumbai,
//     ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [polygonMumbai] : []),
//   ],
//   ssr: true,
// });

// const queryClient = new QueryClient();

// type Props = {
//   children: ReactNode,
//   initialState: State, 
// }



// export function Providers({ children, initialState }: Props) {  

//     // const colorMode = useContext(ColorModeContext);
//     const theme = useTheme();

//     const myTheme: Theme = {
//       blurs: {
//         modalOverlay: '...',
//       },
//       colors: {
//         accentColor: '#fff',
//         accentColorForeground: '...',
//         actionButtonBorder: '...',
//         actionButtonBorderMobile: '#fff',
//         actionButtonSecondaryBackground: '...',
//         closeButton: '#fff',
//         closeButtonBackground: '...',
//         connectButtonBackground: '...',
//         connectButtonBackgroundError: '...',
//         connectButtonInnerBackground: '...',
//         connectButtonText: '#fff',
//         connectButtonTextError: '...',
//         connectionIndicator: '...',
//         downloadBottomCardBackground: '...',
//         downloadTopCardBackground: '...',
//         error: '...',
//         generalBorder: '...',
//         generalBorderDim: '...',
//         menuItemBackground: '...',
//         modalBackdrop: '...',
//         modalBackground:'linear-gradient(0deg, rgb(147, 42, 195), rgb(123, 53, 216))',
//         modalBorder: '...',
//         modalText: '#fff',
//         modalTextDim: '...',
//         modalTextSecondary: '...',
//         profileAction: '...',
//         profileActionHover: '...',
//         profileForeground: '...',
//         selectedOptionBorder: '...',
//         standby: '...',
//       },
//       fonts: {
//         body: '...',
//       },
//       radii: {
//         actionButton: '...',
//         connectButton: '...',
//         menuButton: '...',
//         modal: '8px',
//         modalMobile: '...',
//       },
//       shadows: {
//         connectButton: '#fff',
//         dialog: '...',
//         profileDetailsAction: '...',
//         selectedOption: '...',
//         selectedWallet: '...',
//         walletLogo: '',
//       },
//     };
    
//     const CustomAvatar: AvatarComponent = ({ address, ensImage, size }) => {
//       // const color = generateColorFromAddress(address);
//       return ensImage ? (
//         <Image
//           src={ensImage}
//           width={size}
//           height={size}
//           style={{ borderRadius: 999 }} alt={''}        />
//       ) : (
//         <Box
           
//         >
//           <Image src={Sheild} width={60} alt={''}/>
//         </Box>
//       );
//     }; 

//   return (
//     <WagmiProvider config={config} initialState={initialState}> 
//       <QueryClientProvider client={queryClient}>
//         <RainbowKitProvider theme={myTheme} avatar={CustomAvatar}>
//         {children}
//         </RainbowKitProvider>
//       </QueryClientProvider>
//     </WagmiProvider>
//   )
// }