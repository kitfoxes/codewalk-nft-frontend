import React from "react";
import { Button, Flex, TabNav, Text } from "@radix-ui/themes";
import { useAuth } from "../auth/AuthContext";

function Navbar({ activePage }) {
  const { connect, account } = useAuth();
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
        {account ? (
          <Text style={{ margin: "10px" }}>{account}</Text>
        ) : (
          <Button style={{ margin: "10px", width: "80px" }}>Connect</Button>
        )}
      </Flex>
      <TabNav.Root justify={"start"} size={2}>
        <TabNav.Link href="/" active={activePage == 0 ? true : false}>
          Marketplace
        </TabNav.Link>
        <TabNav.Link href="/create" active={activePage == 1 ? true : false}>
          Create
        </TabNav.Link>
        <TabNav.Link href="/profile" active={activePage == 2 ? true : false}>
          Profile
        </TabNav.Link>
      </TabNav.Root>
    </div>
  );
}

export default Navbar;
