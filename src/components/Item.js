import React from "react"
import { View } from "react-native"
import STYLES from "../constants/styles"

export const Item = props => (
	<View
		style={{
			width: STYLES.WIDTH,
			// borderBottomWidth: 1,
			// borderBottomColor: STYLES.COLORS.GREY_LIGHTER,
			backgroundColor: props.white ? STYLES.COLORS.GREY_LIGHTEST : STYLES.COLORS.WHITE,
			flex: 1,
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center",
			paddingHorizontal: STYLES.SPACING.MAJOR,
			paddingVertical: STYLES.SPACING.MIDDLE,
		}}
	>
		{props.children}
	</View>
)

export const ItemData = props => (
	<View
		style={{
			flex: 1,
			flexDirection: "column",
			justifyContent: "space-around",
			paddingLeft: props.noPadding ? 0 : STYLES.SPACING.MAJOR,
		}}
	>
		{props.children}
	</View>
)
