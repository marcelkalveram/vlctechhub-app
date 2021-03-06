import { Dimensions } from "react-native"

const { width, height } = Dimensions.get("window")

export default {
	WIDTH: width,
	HEIGHT: height,
	SPACING: {
		MAJOR: 16,
		MIDDLE: 12,
		MINOR: 8,
		TINY: 2,
	},
	FONTS: {
		TITLE: 32,
		SUBTITLE: 16,
		TEXT: 12,
	},
	BOLD: "600",
	LINE_HEIGHT: 24,
	COLORS: {
		WHITE: "#FFFFFF",
		BLACK: "#000000",
		GREY: "#303030",
		GREY_LIGHT: "#AAAAAA",
		GREY_LIGHTER: "#EEEEEE",
		GREY_LIGHTEST: "#F6F6F6",
		PRIMARY: "#FDD951",
		PRIMARY_LIGHT: "#FFEA99",
		PRIMARY_DARK: "#B29835", // BC9810
		SECONDARY: "#143F7B",
		SECONDARY_LIGHT: "#6088BF",
	},
}
