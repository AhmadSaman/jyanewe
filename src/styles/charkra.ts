import { extendTheme } from "@chakra-ui/react";

const colors = {
  tango: "#E86A33",
  "mineral-green": "#41644A",
  "heavy-metal": "#263A29",
  "pot-pourri": "#F2E3DB",
};

const fonts = {
  heading: `'Poppins', sans-serif;`,
  body: `'Poppins', sans-serif;`,
};

const textStyles = {
  title: {
    fontSize: ["20px"],
    fontWeight: "bold",
  },
  normal: {
    fontSize: ["16px"],
    fontWeight: "normal",
  },
};

export default extendTheme({ colors, textStyles, fonts });
