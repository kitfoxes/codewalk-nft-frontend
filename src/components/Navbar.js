import React from "react";
import { Button, Flex, TabNav, Text } from "@radix-ui/themes";
import { useAuth } from "../auth/AuthContext";
import WalletConnect from "./WalletConnect";
import { useNavigate } from "react-router-dom";

function Navbar({ activePage }) {
  const { connect, account } = useAuth();
  const navigate = useNavigate();
  const redirectTo = (to) => {
    navigate(to);
  };
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        background: "white",
        top: "0",
        zIndex: 2,
      }}
    >
      <Flex justify={"between"}>
        <Text style={{ margin: "10px" }} weight={"bold"}>
          NFT Marketplace
        </Text>

        <WalletConnect />
      </Flex>
      <TabNav.Root justify={"start"} size={2}>
        <TabNav.Link
          onClick={() => navigate("/")}
          active={activePage == 0 ? true : false}
        >
          Marketplace
        </TabNav.Link>
        <TabNav.Link
          onClick={() => navigate("/create")}
          active={activePage == 1 ? true : false}
        >
          Create
        </TabNav.Link>
        <TabNav.Link
          onClick={() => navigate("/profile")}
          active={activePage == 2 ? true : false}
        >
          Profile
        </TabNav.Link>
      </TabNav.Root>
    </div>
  );
}

export default Navbar;
