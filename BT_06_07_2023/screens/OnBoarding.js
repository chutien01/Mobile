import { SafeAreaView, View, Text, Image, Button, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import React, { useState } from 'react'
import AppIntroSlider from 'react-native-app-intro-slider';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: "#5EA33A",
	},
	titleStyle: {
		padding: 10,
		textAlign: 'center',
		fontSize: 18,
		fontWeight: 'bold',
	},
	paragraphStyle: {
		padding: 20,
		textAlign: 'center',
		fontSize: 16,
	},
	introImageStyle: {
		width: 100,
		height: 100,
		marginBottom: 50
	},
	introTextStyle: {
		fontSize: 16,
		color: "#fff",
		textAlign: 'center',
		// paddingTop: 5,
		paddingVertical: 30
	},
	introTitleStyle: {
		fontWeight: 'bold',
		color: "#fff",
		fontSize: 20,
		marginBottom: 30
	},
	buttonCircle: {
		width: 40,
		height: 40,
		backgroundColor: 'rgba(0, 0, 0, .2)',
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
	}
});

const slides = [
	{
		id: 1,
		title: 'Browse  Food',
		description: '“Welcome to our restaurant app! Log in and check  out our delicious food"',
		image: require('../assets/1.png')
	},
	{
		id: 2,
		title: 'Order Food',
		description: '“Hungry? Order food in just a few clicks and we’ll take care of you.."',
		image: require('../assets/2.png')
	},
	{
		id: 3,
		title: 'Make Reservations',
		description: '“Book a table in advance to avoid waiting in line"',
		image: require('../assets/3.png')
	},
	{
		id: 4,
		title: 'Quick Search',
		description: '“Quickly find food items you like the most"',
		image: require('../assets/4.png')
	},
	{
		id: 5,
		title: 'Apple Pay',
		description: '“We know you’re busy, so you can pay with your phone in just one click"',
		image: require('../assets/5.png')
	},

]

export default function OnBoarding({ navigation }) {
	const [showRealApp, setShowRealApp] = useState(false);

	const _renderItem = ({ item }) => {
		return (
			<View style={styles.container}>
				<Image
					source={item.image}
					style={styles.introImageStyle}
				// resizeMode="contain"
				/>
				<Text style={styles.introTitleStyle}>
					{item.title}
				</Text>
				<Text style={styles.introTextStyle}>
					{item.description}
				</Text>
			</View>
		)
	}
	const _renderNextButton = () => {
		return (
			<View style={styles.buttonCircle}>
				<Icon
					name="md-arrow-forward-sharp"
					color="rgba(255, 255, 255, .9)"
					size={24}
				/>
			</View>
		);
	};
	const _renderDoneButton = () => {
		return (
			<View style={styles.buttonCircle}>
				<Icon
					name="md-checkmark"
					color="rgba(255, 255, 255, .9)"
					size={24}
				/>
			</View>
		);
	};

	const _onDone = () => {
		navigation.navigate('HomeScreen');
	};

	const _onSkip = () => {
		navigation.navigate('Landingscreen');
	};

	return (
		<>
			{showRealApp ? (
				<Home />
				// <SafeAreaView style={styles.container}>
				// 	<View style={styles.container}>
				// 		<Text style={styles.titleStyle}>
				// 			React Native App Intro Slider using AppIntroSlider
				// 		</Text>
				// 		<Text style={styles.paragraphStyle}>
				// 			This will be your screen when you click Skip from any slide or
				// 			Done button at last
				// 		</Text>
				// 		<Button
				// 			title="Show Intro Slider again"
				// 			onPress={() => setShowRealApp(false)}
				// 		/>
				// 	</View>
				// </SafeAreaView>
			) : (
				<AppIntroSlider
					data={slides}
					renderItem={_renderItem}
					renderDoneButton={_renderDoneButton}
					renderNextButton={_renderNextButton}
					onDone={_onDone}
					showSkipButton={true}
					onSkip={_onSkip}
				// activeDotStyle={{
				//     backgroundColor: "#666",
				//     width: 30,
				// }}
				// showSkipButton
				// onDone={() => {
				//     navigation.navigate('Home')
				// }}
				/>
			)}
		</>


	)
}