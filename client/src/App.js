import abi from "./contract/Demo.json";
import {useState,useEffect} from 'react';
import './App.css';
import Buy from "./components/Buy";
import Memos from "./components/Memos";
const ethers = require("ethers");


function App() {
  const [currentAccount, setCurrentAccount] = useState("not connected");
  const [state,setState]=useState({
    provider:null,
    signer:null,
    contract:null,
  });
  useEffect(()=>{
    const connectWallet=async()=>{
      const contractAddress="0x2378e8090c3b492B8e54ca8ae5A736c5558e16De";
      const contractABI=abi.abi;
      try{
        const{ethereum}=window;
        if(ethereum){
          const account=await ethereum.request({
            method:"eth_requestAccounts",
          });
          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });
          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });
        const provider=new ethers.providers.Web3Provider(ethereum);
        const signer=provider.getSigner();
        const contract=new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        setCurrentAccount(account[0]);
        setState({provider,signer,contract});
        }
      }catch(error){
        console.log(error);
      }
    };
    connectWallet();
  },[]);
  //console.log(state);

  return (
    <div style={{ backgroundColor: "#EFEFEF" }}>
      <p style={{ color: 'red',textAlign: 'center'}}>Account - {currentAccount}</p>
      <Buy state={state} account={currentAccount} />
      <Memos state={state}/>
    </div>
  );
}

export default App;
