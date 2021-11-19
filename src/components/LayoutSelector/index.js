import React from 'react';
import useClickAway from '../../hooks/useClickAway';
import useToggle from '../../hooks/useToggle';
import LayoutSelectorContainer from './LayoutSelectorContainer';
import LayoutSelectorItem from './LayoutSelectorItem';

const LayoutSelector = ({ onClear, ...props }) => {
  const [showLayoutSelector, toggleLayoutSelector] = useToggle(false);

  const layoutSelectorRef = useClickAway(() => {
    if (!showLayoutSelector){
      return;
    }

    toggleLayoutSelector();
  })
  

  return (
    <div ref={layoutSelectorRef} style={{position: 'relative'}}>
    <button onClick={() => toggleLayoutSelector()}>show Layout</button>
    <LayoutSelectorContainer 
    style={{display: showLayoutSelector ? 'grid' : 'none'}} 
    {...props}
    >
      <LayoutSelectorItem>
                  1
      </LayoutSelectorItem>
      <LayoutSelectorItem>
                  2
      </LayoutSelectorItem>
      <LayoutSelectorItem>
                  3
      </LayoutSelectorItem>
      <LayoutSelectorItem>
                  4
      </LayoutSelectorItem>
      <LayoutSelectorItem>
                  5
      </LayoutSelectorItem>
      <LayoutSelectorItem>
                  6
      </LayoutSelectorItem>
    </LayoutSelectorContainer>
    </div>
  );
};

export default LayoutSelector;
