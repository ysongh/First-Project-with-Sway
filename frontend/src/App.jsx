import { HashRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Wallet from './pages/Wallet';

function App() { 
  return (
    <ChakraProvider>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route
            path="/wallet"
            element={
              <Wallet />
            } />
          <Route
            path="/"
            element={
              <Home />} />
        </Routes>
      </HashRouter>
    </ChakraProvider>
  )
}

export default App
