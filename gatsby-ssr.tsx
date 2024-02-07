import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Avenir-Heavy.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="avenirFont"
    />,
    <link
      rel="preload"
      href="/fonts/Avenir-Regular.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="avenirFont"
    />,
    <link
      rel="preload"
      href="/fonts/Alike-Regular.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="alikeFont"
    />,
  ]);
}