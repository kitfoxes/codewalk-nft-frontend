import React, { use } from "react";
import Navbar from "../components/Navbar";
import { useAuth } from "../auth/AuthContext";
function Create() {
  const { account } = useAuth()
  return (
    <>
      <Navbar activePage={1} />
      <div className="content">
        create for {account}
      </div>
    </>
  );
}

export default Create;
