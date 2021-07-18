const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export const commonColor = {
    main: '#D8FD00',
    white: '#FFFFFF',
    transparent: '#0000',
    secondary: '#1C53B6'
}

export default {
    light: {
        text: '#000',
        background: '#fff',
        tint: tintColorLight,
        tabIconDefault: '#ccc',
        tabIconSelected: tintColorLight,
    },
    dark: {
        text: '#fff',
        background: '#000',
        tint: tintColorDark,
        tabIconDefault: '#ccc',
        tabIconSelected: tintColorDark,
    },
};
