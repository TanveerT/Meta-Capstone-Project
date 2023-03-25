import React from "react";
import {
	View,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	ScrollView,
	FlatList,
} from "react-native";
import Item from "./Item";

const menu = [
	{
		name: "Greek Salad",
		price: 12.99,
		description:
			"Our delicious salad is served with Feta cheese and peeled cucumber. Includes tomatoes, onions, olives, salt and oregano in the ingredients.",
		image: "greekSalad.jpg",
		category: "starters",
	},
	{
		name: "Bruschetta",
		price: 7.99,
		description:
			"Delicious grilled bread rubbed with garlic and topped with olive oil and salt. Our Bruschetta includes tomato and cheese.",
		image: "bruschetta.jpg",
		category: "starters",
	},
	{
		name: "Grilled Fish",
		price: 20.0,
		description: "Fantastic grilled fish seasoned with salt.",
		image: "grilledFish.jpg",
		category: "mains",
	},
	{
		name: "Pasta",
		price: 6.99,
		description: "Delicious pasta for your delight.",
		image: "pasta.jpg",
		category: "mains",
	},
	{
		name: "Lemon Dessert",
		price: 4.99,
		description: "You can't go wrong with this delicious lemon dessert!",
		image: "lemonDessert.jpg",
		category: "desserts",
	},
];

const Home = () => {
	return (
		<View style={styles.rootContainer}>
			<View style={styles.header}>
				<Text style={[styles.text]}>LITTLE LEMON</Text>
			</View>
			<View style={styles.body}>
				<View style={styles.hotelBanner}>
					<Text
						style={{
							fontSize: 24,
							fontWeight: "800",
							color: "#FFC300",
						}}>
						Little Lemon
					</Text>
					<Text
						style={[styles.text, { fontSize: 20, color: "#fff" }]}>
						Chicago
					</Text>
					<Text
						style={[
							// styles.text,
							{
								fontSize: 16,
								marginTop: "5%",
								color: "#fff",
								width: "75%",
							},
						]}>
						We are family owned Mediterranean restaurants. focused
						on traditional recipes and modern twist.
					</Text>
				</View>

				<FlatList
					data={menu}
					renderItem={({ item }) => <Item menuItem={item} />}
					keyExtractor={(item) => item.id}
				/>
			</View>
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
	body: { flex: 1, backgroundColor: "#fff" },
	footer: {
		height: 180,
		// flex: 0.3,
		// backgroundColor: "#E5E4E2",
		justifyContent: "flex-end",
		alignItems: "flex-end",
		padding: "10%",
		marginBottom: "5%",
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
	hotelBanner: {
		height: 250,
		backgroundColor: "green",
		padding: "5%",
	},
});

export default Home;
