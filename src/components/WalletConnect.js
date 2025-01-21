import { Box, Button, Text } from "@radix-ui/themes";
import React from "react";
import { useAuth } from "../auth/AuthContext";
import { formatAddress } from "../utils/parseAddress";

function WalletConnect() {
  const { account, connectWallet } = useAuth();

  return (
    <div style={{ margin: "10px" }}>
      {account ? (
        <Box style={{background: "lightgrey", borderRadius: "8px"}}><Text style={{margin: "5px", color: "black"} }>{formatAddress(account)}</Text></Box>
      ) : (
        <Button onClick={connectWallet}>Connect</Button>
      )}
    </div>
  );
}

export default WalletConnect;
