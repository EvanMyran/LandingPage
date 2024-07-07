import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import theme from './theme';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" bg="navy.900" color="white">
        <Header />
        <LandingPage />
        <Footer />
      </Box>
    </ChakraProvider>
  );
};

export default App;
