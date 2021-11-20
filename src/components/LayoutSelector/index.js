import React, { useState } from "react";
import useClickAway from "../../hooks/useClickAway";
import useToggle from "../../hooks/useToggle";
import LayoutSelectorContainer from "./LayoutSelectorContainer";
import LayoutSelectorItem from "./LayoutSelectorItem";
import { ReactComponent as LayoutFirst } from "../../assets/layout1.svg";
import { ReactComponent as LayoutSecond } from "../../assets/layout2.svg";
import { ReactComponent as LayoutThird } from "../../assets/layout3.svg";
import { ReactComponent as LayoutForth } from "../../assets/layout4.svg";
import { ReactComponent as LayoutFifth } from "../../assets/layout5.svg";
import { ReactComponent as LayoutSixth } from "../../assets/layout6.svg";
import styled from "styled-components";
import { useImages } from "../../contexts/ImagesProvider";

const SelectLayoutButton = styled.div`
  border: none;
  width: 34.2px;
  height: 34.2px;
  border-radius: 50%;
  background-color: #FFF98F;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  & > svg {
    flex-shrink: 0;
    transform: scale(.7);
    
    path {
    stroke: #67B1E6;
    } 
  }

  &:hover {
    opacity: .8
  }
`;

const LayoutSelector = ({ onClear, ...props }) => {
  const [showLayoutSelector, toggleLayoutSelector] = useToggle(false);
  const {imagesState:{gridLayout}, setGridLayout} = useImages();
  const layoutSelectorRef = useClickAway(() => {
    if (!showLayoutSelector) {
      return;
    }

    toggleLayoutSelector();
  });

  const handleClick = (id) => {
    setGridLayout(LayoutState[id]);
    toggleLayoutSelector();
  };

  const SelectedLayout = LayoutSVG[gridLayout.id];

  return (
    <div ref={layoutSelectorRef} style={{ position: "relative", width:'fit-content' }}>
      <SelectLayoutButton onClick={() => toggleLayoutSelector()}>
        <SelectedLayout style={{border: '2px solid transparent'}}/>
      </SelectLayoutButton>
      <LayoutSelectorContainer
        style={{ display: showLayoutSelector ? "grid" : "none" }}
        {...props}
      >
        <LayoutSelectorItem id='0' onClick={() => handleClick('0')}>
          <LayoutFirst />
        </LayoutSelectorItem>
        <LayoutSelectorItem id='1' onClick={() => handleClick('1')}>
          <LayoutSecond />
        </LayoutSelectorItem>
        <LayoutSelectorItem id='2' onClick={() => handleClick('2')}>
          <LayoutThird />
        </LayoutSelectorItem>
        <LayoutSelectorItem id='3' onClick={() => handleClick('3')}>
          <LayoutForth />
        </LayoutSelectorItem>
        <LayoutSelectorItem id='4' onClick={() => handleClick('4')}>
          <LayoutFifth />
        </LayoutSelectorItem>
        <LayoutSelectorItem id='5' onClick={() => handleClick('5')}>
          <LayoutSixth />
        </LayoutSelectorItem>
      </LayoutSelectorContainer>
    </div>
  );
};

export default LayoutSelector;

const LayoutSVG = {
  0: LayoutFirst,
  1: LayoutSecond,
  2: LayoutThird,
  3: LayoutForth,
  4: LayoutFifth,
  5: LayoutSixth
}

const LayoutState = {
  0: {
    id: '0',
    maxCount: 2
  },
  1: {
    id: '1',
    maxCount: 3
  },
  2: {
    id: '2',
    maxCount: 4
  },
  3: {
    id: '3',
    maxCount: 4
  },
  4: {
    id: '4',
    maxCount: 2
  },
  5: {
    id: '5',
    maxCount: 6
  }
}