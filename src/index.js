import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PadBox } from "@bedrock-layout/padbox";
import { Center } from "@bedrock-layout/center";
import "@bedrock-layout/css-reset/lib/reset.css";
import styled from "styled-components";
import Hero from "./Hero";

const AppStyles = styled(PadBox).attrs(() => ({
  as: Center,
  padding: ["none", "sm"],
  maxWidth: "85rem"
}))`
  font-family: sans-serif;
`;

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <AppStyles>
      <Hero />
    </AppStyles>
  </StrictMode>
);
