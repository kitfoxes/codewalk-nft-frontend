import { Button, Text } from "@radix-ui/themes";
import React, { useRef, useState } from "react";

export default function FileInput() {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("No file chosen");

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    } else {
      setFileName("No file chosen");
    }
  };

  return (
    <div className="file-input-container">
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <Button className="custom-file-button" onClick={handleButtonClick}>
        Choose File
      </Button>
      <Text className="file-name">{fileName}</Text>
    </div>
  );
}
