import React, { useState } from "react";
import useClickAway from "../../hooks/useClickAway";
import useToggle from "../../hooks/useToggle";
import LayoutSelectorContainer from "./LayoutSelectorContainer";
import LayoutSelectorItem from "./LayoutSelectorItem";
import { ReactComponent as PhotosLayout } from "../../assets/photosLayout.svg";
import { ReactComponent as LayoutFirst } from "../../assets/layout1.svg";
import { ReactComponent as LayoutSecond } from "../../assets/layout2.svg";
import { ReactComponent as LayoutThird } from "../../assets/layout3.svg";
import { ReactComponent as LayoutForth } from "../../assets/layout4.svg";
import { ReactComponent as LayoutFifth } from "../../assets/layout5.svg";
import { ReactComponent as LayoutSixth } from "../../assets/layout6.svg";
import dummyData from "../../dummyData.json";
import styled from "styled-components";

const SelectLayoutButton = styled.button`
  background: none;
  border: none;
`;

const LayoutSelector = ({ onClear, ...props }) => {
  const [showLayoutSelector, toggleLayoutSelector] = useToggle(false);
  const [layout, setLayout] = useState(0);
  const { layouts } = dummyData;
  const layoutSelectorRef = useClickAway(() => {
    if (!showLayoutSelector) {
      return;
    }

    toggleLayoutSelector();
  });

  const handleClick = (id) => {
    setLayout(id);
    const grid = layout[id];
  };

  return (
    <div ref={layoutSelectorRef} style={{ position: "relative" }}>
      <SelectLayoutButton onClick={() => toggleLayoutSelector()}>
        <PhotosLayout />
      </SelectLayoutButton>
      <LayoutSelectorContainer
        style={{ display: showLayoutSelector ? "grid" : "none" }}
        {...props}
      >
        <LayoutSelectorItem onClick={() => handleClick(1)}>
          <LayoutFirst />
        </LayoutSelectorItem>
        <LayoutSelectorItem onClick={() => handleClick(2)}>
          <LayoutSecond />
        </LayoutSelectorItem>
        <LayoutSelectorItem onClick={() => handleClick(3)}>
          <LayoutThird />
        </LayoutSelectorItem>
        <LayoutSelectorItem onClick={() => handleClick(4)}>
          <LayoutForth />
        </LayoutSelectorItem>
        <LayoutSelectorItem onClick={() => handleClick(5)}>
          <LayoutFifth />
        </LayoutSelectorItem>
        <LayoutSelectorItem onClick={() => handleClick(6)}>
          <LayoutSixth />
        </LayoutSelectorItem>
      </LayoutSelectorContainer>
    </div>
  );
};

export default LayoutSelector;
