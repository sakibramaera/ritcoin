"use client";

import React, { useEffect, useMemo, useState, ReactNode } from "react";
import { Inter } from "next/font/google";
// import { Providers, config } from '@/configs/providers';
import { CssBaseline, PaletteMode } from "@mui/material";
import createTheme from "@mui/material/styles/createTheme";
import { ThemeProvider } from "@mui/material/styles";
import "./globals.css";
import { ColorModeContext } from "@/context";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });
const metadata : Metadata = {
  title: "Mumblechat",
  description:"mumblechat is a web3 messaging dapp with end to end encryption",
  keywords: ["mumblechat","chat","web3","nextjs"]
}

// Define types for your custom palettes
interface CustomPalette {
  main: string;
  contrastText: string;
  light?: string;
}

interface LightPalette extends CustomPalette {
  primary: CustomPalette;
  secondary: CustomPalette;
  background: {
    paper: string;
    default: string;
  };
  text: {
    primary: string;
  };
  common: {
    black: string;
    white: string;
  };
  success: CustomPalette;
  info: CustomPalette;
  warning: CustomPalette;
  button?: string;
}

interface DarkPalette extends LightPalette { }

// Define custom palettes for light and dark modes
const lightPalette: LightPalette = {
  primary: { main: '#fff', contrastText: '#000', light: '#d1d1d1' },
  secondary: { main: '#E3E1EB', contrastText: '#fff', light: '#F3F0FB' },
  background: { paper: "#fff", default: '#E3E1EB' },
  text: { primary: '#000' },
  common: { black: '1px solid #D4D3DB', white: '#EBEBEB' },
  success: { main: '#BBD7D0', contrastText: '#45B780' },
  info: { main: '#fff', contrastText: '1px solid #EBEBEB' },
  warning: { main: '#fff', contrastText: '1px solid #EBEBEB' },
  button: undefined,
  main: "#E3E1EB",
  contrastText: ""
};

const darkPalette: DarkPalette = {
  primary: { main: '#2A2A30', contrastText: '#fff', light: '#2A2A30' },
  secondary: { main: '#1C1C20', contrastText: '#000', light: '#1C1C20' },
  background: { paper: '#141416', default: '#2A2A30' },
  text: { primary: '#fff' },
  common: { black: '1px solid #27272B', white: '#EBEBEB' },
  success: { main: '#264338', contrastText: '#45B780' },
  info: { main: '#1C1C20', contrastText: '1px solid #1C1C20' },
  warning: { main: '#1C1C20', contrastText: '1px solid #fff0' },
  button: undefined,
  main: "#000",
  contrastText: ""
};

// interface ColorModeContextType {
//   toggleColorMode: () => void;
// }


const RootLayout = ({
  children,
}: {
  children: ReactNode;
}) => {
  // const initialState = cookieToInitialState(config) as State;

  const getInitialMode = (): PaletteMode => {
    if (typeof window !== 'undefined') {
      const savedMode = window.localStorage.getItem('colorMode');
      return savedMode ? (savedMode as PaletteMode) : 'light';
    }
    return 'light';
  };

  const [mode, setMode] = useState<PaletteMode>(getInitialMode);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('colorMode', mode);
    }
  }, [mode]);

  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      ...(mode === 'dark' ? lightPalette : darkPalette),
    },
  });

  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
    },
  }), []);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <html lang="en">
         <head>
        <title>Mumblechat</title>
        <meta name="description" content={"mumblechat is a web3 messaging dapp with end to end encryption"} />
      </head>
      <body className={inter.className}>
        {/* <Providers initialState={initialState}> */}
          <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {children}
            </ThemeProvider>
          </ColorModeContext.Provider>
        {/* </Providers> */}
      </body>
    </html>
  );
};

export default RootLayout;

