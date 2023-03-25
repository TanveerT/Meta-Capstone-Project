import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const Item = ({ menuItem }) => {
	let img =
		"https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/" +
		menuItem.image +
		"?raw=true";
	return (
		<View
			style={{
				marginHorizontal: "2%",
				marginTop: "5%",
				borderBottomWidth: 1,
				borderBottomColor: "#D3D3D3",
				paddingBottom: "5%",
			}}>
			<Text style={{ fontSize: 20, fontWeight: "700" }}>
				{menuItem.name}
			</Text>
			<View style={{ flexDirection: "row" }}>
				<View style={{ flex: 1 }}>
					<Text style={[styles.text]}>
						{menuItem.description.length > 40
							? menuItem.description.substring(0, 40) + "..."
							: menuItem.description}
					</Text>
					<Text
						style={{
							fontSize: 18,
							fontWeight: "700",
							color: "#36454F",
						}}>
						$ {menuItem.price}
					</Text>
				</View>
				<View>
					<Image
						source={{ uri: img }}
						style={{ width: 100, height: 100 }}
					/>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({ text: { fontSize: 16, color: "#D3D3D3" } });

export default Item;
