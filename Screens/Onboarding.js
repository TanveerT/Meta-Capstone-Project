import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
	View,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	ScrollView,
} from "react-native";

const Onboarding = ({ navigation }) => {
	const [firstName, setFirstName] = useState("");
	const [email, setEmail] = useState("");

	return (
		<View style={styles.rootContainer}>
			{/* <StatusBar style='light' /> */}
			{/* <ScrollView style={{ backgroundColor: "yellow" }}> */}
			<View style={styles.header}>
				<Text style={[styles.text]}>LITTLE LEMON</Text>
			</View>
			<View style={styles.body}>
				<Text
					style={[
						styles.text,
						{ marginTop: "15%", textAlign: "center" },
					]}>
					Let us get to know you{" "}
				</Text>
				<View style={{ flex: 1 }}></View>
				<Text
					style={[
						styles.text,
						{ marginTop: "15%", textAlign: "center" },
					]}>
					First Name{" "}
				</Text>
				<TextInput
					value={firstName}
					onChangeText={(userName) => setFirstName(userName)}
					// placeholder={"UserName"}
					style={styles.input}
				/>
				<Text
					style={[
						styles.text,
						{ marginTop: "5%", textAlign: "center" },
					]}>
					Email{" "}
				</Text>
				<TextInput
					value={email}
					onChangeText={(userName) => setEmail(userName)}
					// placeholder={"UserName"}
					style={styles.input}
				/>
				<View style={{ height: "5%" }}></View>
			</View>
			<View style={styles.footer}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						navigation.navigate("Home");
					}}>
					<Text style={[styles.text, { textAlign: "center" }]}>
						Next
					</Text>
				</TouchableOpacity>
			</View>
			{/* </ScrollView> */}
		</View>
	);
};

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,

		backgroundColor: "red",
	},
	header: {
		alignItems: "center",
		justifyContent: "center",
		// height: 100,
		height: 100,
		backgroundColor: "#D3D3D3",
	},
	body: { flex: 1, backgroundColor: "#A9A9A9" },
	footer: {
		height: 180,
		// flex: 0.3,
		backgroundColor: "#E5E4E2",
		justifyContent: "flex-end",
		alignItems: "flex-end",
		padding: "10%",
	},
	text: { fontSize: 18, fontWeight: "600", color: "#36454F" },
	input: {
		width: "80%",
		height: 50,
		marginTop: "5%",
		marginLeft: "auto",
		marginRight: "auto",
		borderWidth: 3,
		borderColor: "#36454F",
		borderRadius: 8,
		padding: "2%",
		fontSize: 18,
		fontWeight: "600",
		color: "#36454F",
	},
	button: {
		width: 100,
		height: 50,
		// borderWidth: 2,
		// borderColor: "#36454F",
		borderRadius: 8,
		padding: "2%",
		backgroundColor: "#A9A9A9",
	},
});

export default Onboarding;
