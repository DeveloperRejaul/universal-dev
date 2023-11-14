const theme = 'light';
const themeColors = {
  light: {
    gray_100: '#656565',
  },
  dark: {
    gray_100: '#000',
  },
};

export const colors = theme === 'light' ? themeColors.light : themeColors.dark;

