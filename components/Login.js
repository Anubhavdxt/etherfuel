import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import contractAbi from '../utils/contractABI.json';
import styles from '/styles/Login.module.css';

// Add the domain you will be minting
const tld = '.etherfuel';
const CONTRACT_ADDRESS = '0x71FB6D6EeaD55E394808E0E6bDE24B66f4aB5814';

const Login = () => {
  const [currentAccount, setCurrentAccount] = useState('');
  const [domain, setDomain] = useState('');
  const [loading, setLoading] = useState(false);
  const [record, setRecord] = useState('');

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert('Get MetaMask -> https://metamask.io/');
        return;
      }

      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });

      console.log('Connected', accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert('Make sure you have metamask!');
      return;
    } else {
      console.log('We have the ethereum object', ethereum);
    }

    const accounts = await ethereum.request({ method: 'eth_accounts' });
    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log('Found an authorized account:', account);
      setCurrentAccount(account);
    } else {
      alert('No authorized account found');
    }
  };

  const mintDomain = async () => {
    if (!domain) {
      return;
    }
    if (domain.length < 3) {
      alert('Domain must be at least 3 characters long');
      return;
    }

    const price =
      domain.length === 3 ? '0.5' : domain.length === 4 ? '0.3' : '0.1';
    console.log('Minting domain', domain, 'with price', price);
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          CONTRACT_ADDRESS,
          contractAbi.abi,
          signer
        );

        console.log('Going to pop wallet now to pay gas...');
        let tx = await contract.register(domain, {
          value: ethers.utils.parseEther(price),
        });

        const receipt = await tx.wait();

        if (receipt.status === 1) {
          console.log(
            'Domain minted! https://mumbai.polygonscan.com/tx/' + tx.hash
          );

          tx = await contract.setRecord(domain, record);
          await tx.wait();

          console.log(
            'Record set! https://mumbai.polygonscan.com/tx/' + tx.hash
          );

          setRecord('');
          setDomain('');
        } else {
          alert('Transaction failed! Please try again');
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderNotConnectedContainer = () => (
    <div className={styles.connect_wallet_container}>
      <button
        className="bg-tertiary text-secondary px-12 py-6 font-semibold text-2xl mt-5"
        onClick={connectWallet}
      >
        Connect Wallet
      </button>
    </div>
  );

  const renderInputForm = () => {
    return (
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex relative mb-3 items-center w-full">
          <input
            className="bg-tertiary text-secondary px-8 py-6 font-semibold text-2xl mt-5 w-96"
            type="text"
            value={domain}
            placeholder="Username"
            onChange={(e) => setDomain(e.target.value)}
          />
          <p className="text-secondary absolute text-2xl right-4 mt-6 font-semibold">
            {' '}
            {tld}{' '}
          </p>
        </div>

        <input
          className="bg-tertiary text-secondary px-8 py-6 font-semibold text-2xl mt-5 w-96"
          type="text"
          value={record}
          placeholder="EV Model, e.g. Tata Nexon EV"
          onChange={(e) => setRecord(e.target.value)}
        />

        <button
          className="bg-tertiary text-secondary px-12 py-6 font-semibold text-2xl mt-5"
          onClick={mintDomain}
        >
          Mint
        </button>
      </div>
    );
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <div className={styles.App}>
      <div className={styles.container}>
        {!currentAccount && renderNotConnectedContainer()}
        {currentAccount && renderInputForm()}
      </div>
    </div>
  );
};

export default Login;
