export default onOkPress => {
	Alert.alert(
		"Alertas para eventos",
		"¿Quieres recibir notificaciones push cuando se publican nuevos eventos?",
		[
			{
				text: "Cancel",
				onPress: () => console.log("Cancel Pressed"),
				style: "cancel",
			},
			{
				text: "OK",
				onPress: onOkPress,
			},
		],
	)
}
