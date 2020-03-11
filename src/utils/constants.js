import {Dimensions, PixelRatio} from 'react-native';

export const api_key = "";

//Window
export const WINDOW = Dimensions.get('window');
export const WINDOW_WIDTH = WINDOW.width;
export const WINDOW_HEIGHT = WINDOW.height;

//Size
const guidelineBaseWidth = 375;
export const scaleSize = size => (WINDOW_WIDTH/guidelineBaseWidth) * size;

//Font
export const scaleFont = size => size * PixelRatio.getFontScale();
