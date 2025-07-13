import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNotificationIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 24 25" fill="none" {...props}>
    <Path
      d="M14.6068 19.2125H21.8597L18.8808 14.4053V7.95091C18.8808 4.11203 15.7688 1 11.9299 1C8.09099 1 4.97896 4.11203 4.97896 7.95091V14.4053L2 19.2125H9.25295M14.6068 19.2125C14.8002 19.6075 14.9088 20.0516 14.9088 20.521C14.9088 22.1663 13.5751 23.5 11.9299 23.5C10.2846 23.5 8.95091 22.1663 8.95091 20.521C8.95091 20.0516 9.05951 19.6075 9.25295 19.2125M14.6068 19.2125H9.25295"
      stroke="currentColor"
      strokeWidth={2}
    />
  </Svg>
);
const Memo = memo(SvgNotificationIcon);
export default Memo;
