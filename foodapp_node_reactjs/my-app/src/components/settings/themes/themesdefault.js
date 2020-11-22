import { themeConfig } from './config';
const theme = {};

theme.palette = {
 
 color: [
    "#FEAC01", // 0: Orange
    "#42299a", // 1: Purple
    "#F75D81", // 2: Pink
    "#7ED321", // 3: LimeGreen
    "#39435f", // 4: BlueShade
    "#FFCA28", // 5: Yellow
    "#F2BD1B", // 6: Yellow Darken 5%
    "#3b5998", // 7: Facebook
    "#344e86", // 8: Facebook Darken 5%
    "#dd4b39", // 9: Google Plus
    "#d73925", // 10: Google Plus Darken 5%
    "#e14615", // 11: Auth0
    "#ca3f13", // 12: Auth0
    "#e0364c" // 13: themeColor--AlizarinCrimson
  ], 

  widgets: [
    '#7266B8', // 0: purple
    '#40A5F5', // 1: blue
    '#7ED337', // 2: green
    '#F85D7F', // 3: pink
  ],
};

theme.fonts = {
  primary: "Roboto, sans-serif",
  pre: "Consolas, Liberation Mono, Menlo, Courier, monospace",
  poppins: "Poppins, sans-serif"
};

export default theme;
