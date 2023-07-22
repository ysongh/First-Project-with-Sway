import { useState } from 'react'

import { createWallet } from '../createWallet'

function App() {
  const [address, setAddress] = useState("");
  const [privateKey, setPrivateKey] = useState("");

  const handleClick = () => {
    const wallet = createWallet();
    setAddress(wallet.address.toString());
    setPrivateKey(wallet.privateKey);
  }
  return (
    <>
      <h1>First Project with Sway</h1>
      <button onClick={handleClick}>Create Wallet</button>
      {address && <p>Address: {address}</p>}
      {privateKey && <p>Private Key: {privateKey}</p>}
    </>
  )
}

export default App
