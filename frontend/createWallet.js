import { Wallet } from "fuels";

export const createWallet = () => {
  return Wallet.generate(); 
}
