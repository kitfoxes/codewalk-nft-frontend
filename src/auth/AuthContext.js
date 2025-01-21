import React, { createContext, useContext, useState, useEffect } from "react";
import { BrowserProvider } from "ethers";
import Cookie from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [account, setAccount] = useState(null);
  const [hasWallet, setWallet] = useState(true);

  const connectWallet = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setAccount(accounts[0]);
    console.log(window.ethereum);
  };

  useEffect(() => {
    const initialize = async () => {
      let ethereum;

      if (!window.ethereum) {
        setWallet(false);
        return;
      }

      ethereum = window.ethereum;
      const connected = ethereum.isConnected();

      if (connected) {
        if (ethereum.accounts) {
          setAccount(ethereum.accounts[0]);
          return;
        } else {
          console.log("Connected but no accounts: ", ethereum);
        }
      } else {
        console.log("Not Connected");
      }

      window.ethereum.on("accountsChanged", async (accounts) => {
        setAccount(accounts[0]);
        await initialize();
      });
    };

    initialize();
  }, []);

  return (
    <AuthContext.Provider value={{ account, connectWallet }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
