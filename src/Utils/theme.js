export const themeOptions = {
  light: {
    token: {
      colorPrimary: "#6B62FF",
      colorBgContainer: "#ffffff",
      colorText: "#121224",
    },
    components: {
      Layout: {
        headerPadding: "0 20px",
        headerBg: "white",
      },
      Menu: {
        horizontalItemSelectedColor: "#6B62FF",
        horizontalItemHoverColor: "#6B62FF",
        itemHoverColor: "#6B62FF",
        fontSize: 16,
      },
      Tag: {
        borderRadius: 20,
        borderRadiusSM: 40,
        fontSizeSM: 13,
      },
      Card: {
        paddingLG: 14,
      },
      Table: {
        headerBg: "#C8C4FF",
        rowHoverBg: "#F0EEFF",
      },
      Button: {
        // borderRadius: 20,
      },
    },
  },
  dark: {
    token: {
      colorPrimary: "#6B62FF",
      colorBgLayout: "#1F2023",
      colorText: "#fff",
    },
    components: {
      Layout: {
        headerPadding: "0 20px",
        headerBg: "#000",
      },
      Menu: {
        darkItemBg: "#000",
      },
      Button: {
        defaultBg: "#3D424D",
        defaultHoverBg: "#494F5A",
      },
    },
  },
};

export default themeOptions;
