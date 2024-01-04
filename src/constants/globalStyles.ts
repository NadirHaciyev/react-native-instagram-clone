import {ViewStyle, ImageStyle, FlexAlignType} from 'react-native';

interface GlobalStyles {
  flexCenter: ViewStyle;
  absoluteCenter: ViewStyle;
}

const globalStyles: GlobalStyles = {
  flexCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  absoluteCenter: {
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
};

export default globalStyles;
