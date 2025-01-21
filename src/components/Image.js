import { Skeleton } from "@radix-ui/themes";
import React, { useState } from "react";

function Image({ src }) {
  const [isLoaded, setLoaded] = useState(false);
  const handleOnLoad = () => {
    setLoaded(true);
  };
  return (
    <>
      <Skeleton width={"200px"} height={"200px"} loading={!isLoaded}>
        <img src={src} onLoad={handleOnLoad} />
      </Skeleton>
    </>
  );
}

export default Image;
