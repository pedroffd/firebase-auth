import { extendTheme } from "@chakra-ui/react";

const Select = {
  parts: ["field", "icon"],
  baseStyle: {
    field: {
      color: "gray.900",
    },
    icon: {
      color: "gray.900",
    },
  },
};

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
    600: "#6EC1E4",
  },
};

const shadows = {
  shadows: {
    black: "0px 0px 10px 1px rgba(0,0,0,0.1)",
  },
};

export const theme = extendTheme({
  colors,
  shadows,
  components: {
    Select,
    Button: {
      defaultProps: {
        colorScheme: "yellow",
      },
    },
  },
});
