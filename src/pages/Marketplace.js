import React from "react";
import Navbar from "../components/Navbar";
import { Box, Em, Flex, Skeleton, Text } from "@radix-ui/themes";
import Image from "../components/Image";

const allNFTS = [
  {
    creator: "0x000000000",
    price: 0.4,
    description: "This is description 1",
    img: "https://picsum.photos/200",
  },
  {
    creator: "0x000000000",
    price: 0.1,
    description: "This is description 2",
    img: "https://picsum.photos/200",
  },
  {
    creator: "0x000000000",
    price: 0.2,
    description: "This is description 3",
    img: "https://picsum.photos/200",
  },
  {
    creator: "0x000000000",
    price: 0.5,
    description: "This is description 4",
    img: "https://picsum.photos/200",
  },
  {
    creator: "0x000000000",
    price: 0.5,
    description: "This is description 4",
    img: "https://picsum.photos/200",
  },
  {
    creator: "0x000000000",
    price: 0.5,
    description: "This is description 4",
    img: "https://picsum.photos/200",
  },
  {
    creator: "0x000000000",
    price: 0.5,
    description: "This is description 4",
    img: "https://picsum.photos/200",
  },
  {
    creator: "0x000000000",
    price: 0.5,
    description: "This is description 4",
    img: "https://picsum.photos/200",
  },
  {
    creator: "0x000000000",
    price: 0.5,
    description: "This is description 4",
    img: "https://picsum.photos/200",
  },
  {
    creator: "0x000000000",
    price: 0.5,
    description: "This is description 4",
    img: "https://picsum.photos/200",
  },
  {
    creator: "0x000000000",
    price: 0.5,
    description: "This is description 4",
    img: "https://picsum.photos/200",
  },
  {
    creator: "0x000000000",
    price: 0.5,
    description: "This is description 4",
    img: "https://picsum.photos/200",
  },
  {
    creator: "0x000000000",
    price: 0.5,
    description: "This is description 4",
    img: "https://picsum.photos/200",
  },
  {
    creator: "0x000000000",
    price: 0.5,
    description: "This is description 4",
    img: "https://picsum.photos/200",
  },
  {
    creator: "0x000000000",
    price: 0.5,
    description: "This is description 4",
    img: "https://picsum.photos/200",
  },
  {
    creator: "0x000000000",
    price: 0.5,
    description: "This is description 4",
    img: "https://picsum.photos/200",
  },
];

function Marketplace() {
  return (
    <>
      <Navbar activePage={0} />
      <div className="content">
        <div className="nftGrid">
          {allNFTS.map((nft) => (
            <Box key={nft.creator} className="nftBox">
              <Box className="nftBoxInner">
                <Image src={nft.img} />
                <Box>
                  <Text weight={"bold"}>ETH {nft.price}</Text>
                </Box>
                <Box>
                  <Text size={1} color="grey">
                    {nft.creator}
                  </Text>
                </Box>
                <Box>
                  <Text>{nft.description}</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </div>
      </div>
    </>
  );
}

export default Marketplace;
