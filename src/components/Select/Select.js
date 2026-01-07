import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <IconWrapper style={{ "--width": "24px", "--height": "24px" }}>
        <Icon id="chevron-down" size={24} strokeWidth={2} />
      </IconWrapper>
    </Wrapper>
  );
};

const NativeSelect = styled.select`
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  padding: 12px 16px;
  padding-right: 52px;

  appearance: base-select;

  &::picker-icon {
    content: none;
  }

  &:focus {
    outline: 2px solid ${COLORS.primary};
    outline-offset: -2px;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

const Wrapper = styled.div`
  isolation: isolate;
  position: relative;
  width: max-content;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  width: var(--width);
  height: var(--height);
  position: absolute;
  top: 0;
  right: 6px;
  bottom: 0;
  margin: auto;
  pointer-events: none;
`;

export default Select;
