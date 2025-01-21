import React, { use } from "react";
import Navbar from "../components/Navbar";
import { useAuth } from "../auth/AuthContext";
import { Button, TextField } from "@radix-ui/themes";
import FileInput from "../components/FileUpload";
function Create() {
  const { account } = useAuth();
  return (
    <>
      <Navbar activePage={1} />
      <div className="content">
        <FileInput />
      </div>
    </>
  );
}

export default Create;
