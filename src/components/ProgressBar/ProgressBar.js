/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    height: 8,
    padding: 0,
    borderRadius: 4,
    innerBarBorderRadius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    borderRadius: 4,
    innerBarBorderRadius: 4,
  },
  large: {
    height: 24,
    padding: 4,
    borderRadius: 8,
    innerBarBorderRadius: 4,
  },
};

const ProgressBar = ({ value, size }) => {
  const sizeData = SIZES[size];
  return (
    <>
      <ContainerBar
        height={sizeData.height}
        padding={sizeData.padding}
        borderRadius={sizeData.borderRadius}
        role="progressbar"
        id="loadinglabel"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <TrimmingBorderRadius
          innerBarBorderRadius={sizeData.innerBarBorderRadius}
        >
          <InnerBar value={value} />
        </TrimmingBorderRadius>
      </ContainerBar>
      <VisuallyHidden>
          Progress: {value}%
      </VisuallyHidden>
    </>
  );
};

const ContainerBar = styled.div`
  background-color: ${COLORS.transparentGray15};
  height: ${(props) => props.height}px;
  border-radius: ${(props) => props.borderRadius}px;
  padding: ${(props) => props.padding}px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const TrimmingBorderRadius = styled.div`
  overflow: hidden;
  height: 100%;
  border-radius: ${(props) => props.innerBarBorderRadius}px;
`;

const InnerBar = styled.div`
  background-color: ${COLORS.primary};
  width: ${(props) => props.value}%;
  height: 100%;
`;

export default ProgressBar;
