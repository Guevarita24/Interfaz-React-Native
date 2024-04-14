import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	Pressable,
	Alert,
	Image,
} from "react-native";

export default function App() {
	const showAlert = (title, description) => {
		Alert.alert(title, description);
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<ImageBackground
					source={require("./assets/textura-madera.png")}
					style={styles.backgroundImage}
					resizeMode="cover"
				>
					<Text style={styles.headerText}>
						¡CONOZCAN LOS 4 ANIMALES MÁS RÁPIDOS DEL MUNDO!
					</Text>
				</ImageBackground>
			</View>
			<View style={styles.body}>
				<Pressable
					style={styles.button}
					onPress={() =>
						showAlert(
							"Halcón Peregrino",
							"El halcón peregrino es el ave más rápida del mundo, alcanzando velocidades de hasta 389 km/h durante su picada."
						)
					}
				>
					<Text style={styles.textStyle}>Halcón Peregrino</Text>
					<Image
						style={styles.buttonImage}
						source={require("./assets/halcon-peregrino.png")}
					/>
				</Pressable>
				<Pressable
					style={styles.button}
					onPress={() =>
						showAlert(
							"Guepardo",
							"El guepardo es el animal terrestre más rápido, puede alcanzar velocidades de hasta 112 km/h en breves carreras."
						)
					}
				>
					<Text style={styles.textStyle}>Guepardo</Text>
					<Image
						style={styles.buttonImage}
						source={require("./assets/guepardo.png")}
					/>
				</Pressable>
				<Pressable
					style={styles.button}
					onPress={() =>
						showAlert(
							"Pez Vela",
							"El pez vela puede nadar a una velocidad de hasta 110 km/h, siendo el pez más rápido."
						)
					}
				>
					<Text style={styles.textStyle}>Pez Vela</Text>
					<Image
						style={styles.buttonImage}
						source={require("./assets/pez-vela.png")}
					/>
				</Pressable>
				<Pressable
					style={styles.button}
					onPress={() =>
						showAlert(
							"Gaviota Ártico",
							"La gaviota ártica es conocida por tener la migración más larga de cualquier ave, puede volar a grandes velocidades."
						)
					}
				>
					<Text style={styles.textStyle}>Gaviota del Artico</Text>
					<Image
						style={styles.buttonImage}
						source={require("./assets/gaviota-artico.png")}
					/>
				</Pressable>
			</View>
			<View style={styles.footer}>
				<Text style={styles.footerText}>
					Hecho por: Miguel Angel Guevara Osorio - Ficha: 2627092.
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	header: {
		height: 110,
		justifyContent: "center",
		alignItems: "center",
	},
	body: {
		flex: 1,
		flexDirection: "row",
		flexWrap: "wrap",
	},
	button: {
		width: "50%", // Ocupa el 50% del ancho disponible
		height: "50%", // Ocupa el 50% del alto disponible
	},
	buttonImage: {
		width: "100%",
		height: "90%",
		resizeMode: "stretch",
	},
	footer: {
		height: 80,
		backgroundColor: "black",
		justifyContent: "center",
		alignItems: "center",
	},
	headerText: {
		fontSize: 20,
		fontWeight: "bold",
		color: "white",
		textAlign: "center",
	},
	footerText: {
		fontSize: 16,
		color: "white",
		textAlign: "center",
	},
	backgroundImage: {
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},

	textStyle: {
		width: "100%",
		height: "10%",
		fontSize: 21,
		fontWeight: "bold",
		alignItems: "center",
	},
});
