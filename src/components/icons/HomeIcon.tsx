import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from './types';

function HomeIcon({size = 24, ...props}: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 22 21" fill="none" {...props}>
      <Path
        d="M1.45307 10.751L10.9773 1.02175L20.5015 10.751C20.7906 11.0463 20.9545 11.4468 20.9545 11.8711V19.4556C20.9545 19.7747 20.7037 20 20.4427 20H14.964C14.713 20 14.4721 19.7849 14.4721 19.476V14.8886C14.4721 12.9497 12.9267 11.34 10.9773 11.34C9.02787 11.34 7.48244 12.9497 7.48244 14.8886V19.476C7.48244 19.7849 7.24157 20 6.99053 20H1.51187C1.25085 20 1 19.7747 1 19.4556V11.8711C1 11.4468 1.16397 11.0463 1.45307 10.751Z"
        stroke="white"
        strokeWidth="2"
      />
    </Svg>
  );
}

export default HomeIcon;
