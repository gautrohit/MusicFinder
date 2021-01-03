import React from "react";
import { css } from "@emotion/core";
import MoonLoader from "react-spinners/MoonLoader";

const override = css`
  display: block;
  margin: auto;
`;
const Spiner = () => (
  <>
    <MoonLoader css={override} size={100} color={"#D42C43"} />
  </>
);

export default Spiner;
