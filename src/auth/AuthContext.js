import React, { createContext, useContext, useState, useEffect } from "react";
import { BrowserProvider } from "ethers";
import Cookie from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("MetaMask is not installed!");
      return;
    }

    try {
      const ethereumProvider = new BrowserProvider(window.ethereum);
      await ethereumProvider.send("eth_requestAccounts", []);
      const signer = ethereumProvider.getSigner();
      const walletAddress = (await signer).address;

      setProvider(ethereumProvider);
      setAccount(walletAddress);
      Cookie.set("walletAddress", walletAddress, { expires: 15 / 1440 });
      return walletAddress;
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      return null;
    }
  };

  useEffect(() => {
    const initialize = async () => {
      const savedAccount = Cookie.get("walletAddress");
      if (!window.ethereum) {
        return;
      }
      if (savedAccount) {
        setAccount(savedAccount);
        const ethereumProvider = new BrowserProvider(window.ethereum);
        setProvider(ethereumProvider);
      }

      const handleAccountsChanged = (accounts) => {
        if (accounts.length > 0) {
          const newAccount = accounts[0];
          setAccount(newAccount);
          Cookie.set("walletAddress", newAccount, { expires: 1 });
        } else {
          setAccount(null);
          Cookie.remove("walletAddress");
        }
      };

      const handleChainChanged = () => {
        window.location.reload();
      };

      // Attach event listeners
      window.ethereum.on("accountsChanged", handleAccountsChanged);
      window.ethereum.on("chainChanged", handleChainChanged);
    };

    initialize();
  }, []);

  return (
    <AuthContext.Provider value={{ account, provider, connectWallet }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
