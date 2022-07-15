import React from "react";
import { Stack } from "@bedrock-layout/stack";
import { Split } from "@bedrock-layout/split";
import { Frame } from "@bedrock-layout/frame";
import { Cover } from "@bedrock-layout/cover";
import { Inline } from "@bedrock-layout/inline";
import { InlineCluster } from "@bedrock-layout/inline-cluster";
import dataImage from "../public/assets/data.jpg";

export default function Hero() {
  return (
    <Stack as="header" gutter="sm">
      <Inline gutter="lg" align="center" stretch={1}>
        <h1>Arrow Data</h1>

        <nav>
          <InlineCluster as="ul" gutter="xl" justify="center">
            <li>Solutions</li>
            <li>Pricing</li>
            <li>Docs</li>
            <li>More</li>
          </InlineCluster>
        </nav>

        <InlineCluster gutter="lg" align="center">
          <a href="/#">Sign in</a>
          <button>Sign up</button>
        </InlineCluster>
      </Inline>

      <Split gutter="sm">
        <Cover gutter="none" minHeight={`calc(100vh - 48px - 0.25rem)`}>
          <Stack as="section" gutter="xl">
            <h2>Data Solutions for your business needs</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
              vel risus commodo viverra maecenas. Magna sit amet purus gravida
              quis blandit turpis cursus.
            </p>
            <InlineCluster gutter="lg">
              <button>Get Started</button>
              <button>Live Demo</button>
            </InlineCluster>
          </Stack>
        </Cover>
        <Frame>
          <img src={dataImage} alt="" />
        </Frame>
      </Split>
    </Stack>
  );
}
