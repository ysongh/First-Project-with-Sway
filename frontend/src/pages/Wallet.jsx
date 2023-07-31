import React, { useState } from 'react';
import { Container, Button } from '@chakra-ui/react';

import { createWallet } from '../../createWallet';

function Wallet() {
  const [address, setAddress] = useState("");
  const [privateKey, setPrivateKey] = useState("");

  const handleClick = () => {
    const wallet = createWallet();
    setAddress(wallet.address.toString());
    setPrivateKey(wallet.privateKey);
  }

  return (
    <Container maxW='1000px'>
      <h1>Create Wallet</h1>
      <Button onClick={handleClick} mt={3}>
        Create Wallet
      </Button>
      {address && <p>Address: {address}</p>}
      {privateKey && <p>Private Key: {privateKey}</p>}
    </Container>
  )
}

export default Wallet;