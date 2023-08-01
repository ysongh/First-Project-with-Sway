import { useEffect, useState } from "react";
import { Container, Heading, Input, Button } from '@chakra-ui/react'
import { Wallet } from "fuels";

import { ContractAbi__factory } from "../contracts";
import { CONTRACT_ID, WALLET_SECRET } from "../keys";

// Create a Wallet from given secretKey in this case
// The one we configured at the chainConfig.json
const wallet = Wallet.fromPrivateKey(
  WALLET_SECRET,
  "https://beta-3.fuel.network/graphql"
);

// Connects out Contract instance to the deployed contract
// address using the given wallet.
const contract = ContractAbi__factory.connect(CONTRACT_ID, wallet);

function Home() {
  const [counter, setCounter] = useState(0);
  const [num, setNum] = useState(0);
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    async function main() {
      // Executes the counter function to query the current contract state
      // the `.get()` is read-only, because of this it don't expand coins.
      const { value } = await contract.functions.count().get();
      setCounter(Number(value));

      const data = await wallet.getBalances();
      console.log(data)
      setAssets(data)
    }
    main();
  }, []);

  async function increment() {
    setLoading(true);
    // Creates a transactions to call the increment function
    // because it creates a TX and updates the contract state this requires the wallet to have enough coins to cover the costs and also to sign the Transaction
    try {
      await contract.functions.increment().txParams({ gasPrice: 1 }).call();
      const { value } = await contract.functions.count().get();
      setCounter(Number(value));
    } finally {
      setLoading(false);
    }
  }

  async function decrement() {
    setLoading(true);
    // Creates a transactions to call the decrement function
    // because it creates a TX and updates the contract state this requires the wallet to have enough coins to cover the costs and also to sign the Transaction
    try {
      await contract.functions.decrement().txParams({ gasPrice: 1 }).call();
      const { value } = await contract.functions.count().get();
      setCounter(Number(value));
    } finally {
      setLoading(false);
    }
  }

  async function insert() {
    setLoading(true);
    try {
      await contract.functions.insert_into_storage_map().txParams({ gasPrice: 1 }).call();
      const { value } = await contract.functions.count().get();
      setCounter(Number(value));
    } finally {
      setLoading(false);
    }
  }

  async function check() {
    try {
      const { value } = await contract.functions.get_from_storage_map(num).get();
      setResult(Number(value))
    } finally {
      setLoading(false);
    }
  }
  
  return (
    <Container maxW='1000px'>
      <header className="App-header">
        {assets.map(a => (
          <div>
            <p>Asset Id: {a.assetId}</p>
            <p>Balance: {a.amount.toString()}</p>
          </div>
        ))}
        <p>Counter: {counter}</p>
        <Button isLoading={loading} onClick={increment}>
          {loading ? "Incrementing..." : "Increment"}
        </Button>
        <br />
        <br />
        <Button isLoading={loading} onClick={decrement}>
          {loading ? "Decrementing..." : "Decrement"}
        </Button>
        <br />
        <br />
        <Button isLoading={loading} onClick={insert}>
          {loading ? "Insert..." : "Insert"}
        </Button>
        <br />
        <br />
        <input value={num} onChange={(e) => setNum(e.target.value)} />
        <Button onClick={check}>
          Check
        </Button>
        <p>{result}</p>
      </header>
    </Container>
  );
}
export default Home;
