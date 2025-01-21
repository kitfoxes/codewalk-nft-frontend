import React from "react";
import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box, Button } from "@radix-ui/themes";

const ProtectedRoute = ({ children, activePage }) => {
  const { account, connectWallet } = useAuth();
  console.log(account)

  if (!account) {
    return (
      <>
        <Navbar activePage={activePage} />

        <div className="content">
          <Box style={{ textAlign: "center"}} width={"auto"}>
            <h2>Please connect your wallet to continue</h2>
            <Button onClick={connectWallet}>Connect MetaMask</Button>
          </Box>
        </div>
      </>
    );
  }

  return children;
};

export default ProtectedRoute;
