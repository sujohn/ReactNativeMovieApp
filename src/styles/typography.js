import {scaleFont} from '../utils/constants';

//Font Family
export const FONT_FAMILY_REGULAR = 'OpenSans-Regular';
export const FONT_FAMILY_BOLD = 'OpenSans-Bold';

//Font Weight
export const FONT_WEIGHT_REGULAR = '400';
export const FONT_WEIGHT_BOLD = '700';

//Font Size
export const FONT_SIZE_12 = scaleFont(12);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_16 = scaleFont(16);

//Line Height
export const LINE_HEIGHT_24 = scaleFont(24);
export const LINE_HEIGHT_20 = scaleFont(20);
export const LINE_HEIGHT_16 = scaleFont(16);

//Font Style
export const FONT_REGULAR = {
    fontFamily: FONT_FAMILY_REGULAR,
    fontWeight: FONT_WEIGHT_REGULAR
};

export const FONT_BOLD = {
    fontFamily: FONT_FAMILY_BOLD,
    fontWeight: FONT_WEIGHT_BOLD
};