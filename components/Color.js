import copy from "copy-to-clipboard";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 12px 0;
  display: flex;
  border: 5px solid var(--light-pink);
  background-color: var(--light-pink);
  color: var(--dark-pink);
  cursor: pointer;
`;

const Text = styled.div`
  font-family: "Courier New", Courier, monospace;
  padding: 8px;
`;

const ColorBox = styled.div`
  flex: 1 1;
  padding: 8px;
  color: black;
`;

export default function Color({ color }) {
  const [copied, setCopied] = useState(false);
  const [tm, setTm] = useState(0);
  const copyColor = () => {
    copy(color, {
      format: "text/plain",
    });
    setCopied(true);
    clearTimeout(tm);
    setTm(setTimeout(() => setCopied(false), 1000));
  };
  return (
    <Container className="rounded" onClick={copyColor}>
      <Text>{color}</Text>
      <ColorBox className="rounded" style={{ backgroundColor: color }}>
        {copied && "Copied to clipboard!"}
      </ColorBox>
    </Container>
  );
}
