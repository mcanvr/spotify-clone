import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRecentsIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M7 2.5C7 2.77614 6.77614 3 6.5 3C6.22386 3 6 2.77614 6 2.5C6 2.22386 6.22386 2 6.5 2C6.77614 2 7 2.22386 7 2.5Z"
      fill="white"
    />
    <Path
      d="M3 6.5C3 6.77614 2.77614 7 2.5 7C2.22386 7 2 6.77614 2 6.5C2 6.22386 2.22386 6 2.5 6C2.77614 6 3 6.22386 3 6.5Z"
      fill="white"
    />
    <Path
      d="M1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1M12 5.5V12H16M7 2.5C7 2.77614 6.77614 3 6.5 3C6.22386 3 6 2.77614 6 2.5C6 2.22386 6.22386 2 6.5 2C6.77614 2 7 2.22386 7 2.5ZM3 6.5C3 6.77614 2.77614 7 2.5 7C2.22386 7 2 6.77614 2 6.5C2 6.22386 2.22386 6 2.5 6C2.77614 6 3 6.22386 3 6.5Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
);
const Memo = memo(SvgRecentsIcon);
export default Memo;
