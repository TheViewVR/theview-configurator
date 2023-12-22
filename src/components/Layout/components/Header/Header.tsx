import { FC } from 'react';
import { AnchorContainer } from 'antd/es/anchor/Anchor';

import { LogoIcon } from 'assets/images';

import { HeaderWrapper, MenuItem } from './styled';
import { ANCHOR_ITEMS } from './constants';

const Header: FC = () => (
  <HeaderWrapper>
    <LogoIcon />
    <MenuItem
      direction='horizontal'
      items={ANCHOR_ITEMS}
      targetOffset={20}
      affix={false}
      getContainer={() =>
        document.getElementById('scrollable') as AnchorContainer
      }
    />
  </HeaderWrapper>
);

export default Header;
