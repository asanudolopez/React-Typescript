import { createMuiTheme, Theme } from '@material-ui/core/styles';
import { palette as paletteBase, paletteLegacy } from './palette';
import { fonts } from './fonts';

const disableRipple = true;
const unit = 8;

const buttonStyles = {
    borderRadius: 0,
    boxShadow: 'none',
    textTransform: 'none',
    paddingTop: unit,
    paddingBottom: unit,
    ...fonts.button,
};

const baseTheme = (type: any, palette: any) => ({
    palette: {
        type,
        ...palette,
    },
    typography: {
        useNextVariants: true,
        ...fonts,
    },
    props: {
        MuiButtonBase: {
            disableRipple,
        },
        MuiButton: {
            style: {
                ...buttonStyles,
            },
            classes: {
                label: {
                    style: {
                        color: 'red',
                    },
                },
            },
        },
    },
});

export const darkTheme = createMuiTheme(baseTheme('dark', paletteBase) as any) as Theme;
export const theme = createMuiTheme(baseTheme('light', paletteBase) as any) as Theme;
export const legacyTheme = createMuiTheme(baseTheme('light', paletteLegacy) as any) as Theme;
