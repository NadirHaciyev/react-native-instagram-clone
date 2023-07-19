import React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';
import {IconProps} from './types';

interface ReelIconProps extends IconProps {
  fill?: string;
}

function ReelIcon({size, stroke, strokeWidth, ...props}: ReelIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 29 29" fill="none" {...props}>
      <Rect
        x="4.5"
        y="4.92661"
        width="20"
        height="20"
        rx="6"
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <Path
        d="M5.24609 10.0377H12.5794H23.754M18.6905 9.51394L17.4683 7.4187L16.4207 5.67267M12.4048 9.68854L11.1826 7.5933L10.135 5.84727"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="square"
      />
      <Path
        d="M12.0961 14.6735C12.1137 13.9247 12.918 13.4603 13.5753 13.8195L18.1153 16.3C18.8001 16.6741 18.8116 17.6534 18.1359 18.0436L13.474 20.7351C12.7982 21.1253 11.9559 20.6256 11.9743 19.8455L12.0961 14.6735Z"
        fill={stroke}
      />
    </Svg>
  );
}

export default ReelIcon;
