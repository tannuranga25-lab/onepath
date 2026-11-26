import { createTheme } from "@mantine/core";

export const theme = createTheme({
    primaryColor: "forest",
    primaryShade: 6,
    colors: {
    forest: [
        "#E9F3EE",
        "#D4E9DE",
        "#B7D7C8",
        "#91C1AC",
        "#6AA68D",
        "#42866F",
        "#176657",
        "#125447",
        "#0D4238",
        "#092F28",
    ],
    },

    fontFamily: "Inter, Arial, sans-serif",
    headings: {
    fontFamily: "Inter, Arial, sans-serif",
    fontWeight: "700",
    },

    defaultRadius: "md",
});
