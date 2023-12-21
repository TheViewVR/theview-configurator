import { FC, useEffect, useRef, useState } from 'react';

import { LogoIcon } from 'assets/images';

import { HeaderWrapper, MenuItem } from './styled';
import { ANCHOR_ITEMS } from './constants';

const Header: FC = () => {
  const topRef = useRef<HTMLDivElement>(null);
  const [targetOffset, setTargetOffset] = useState<number>();

  useEffect(() => {
    setTargetOffset(topRef.current?.clientHeight);
  }, []);

  return (
    <HeaderWrapper ref={topRef}>
      <LogoIcon />
      <MenuItem
        direction='horizontal'
        items={ANCHOR_ITEMS}
        targetOffset={targetOffset}
      />
    </HeaderWrapper>
  );
};

export default Header;
