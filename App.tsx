/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
} from 'react-native';

import {
	Header,
	LearnMoreLinks,
	Colors,
	DebugInstructions,
	ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import FAButton, { buttonType } from "./src/components/FAButton";

declare const global: { HermesInternal: null | {} };

async function sum(a: number, b: number) {
	console.info('== The Math: ', a + b)

	return a + b
}

async function toggle() {
	let isEnabled: boolean = true
	isEnabled ? buttonType.primary : buttonType.primaryDisabled
}

const App = () => {

	return (
		<>
			<StatusBar barStyle="dark-content" />
			<SafeAreaView>
				<ScrollView
					contentInsetAdjustmentBehavior="automatic"
					style={styles.scrollView}>

						<FAButton 
							disabled={ false }
							title={ buttonType.primary }
							btnType={ buttonType.primary }
							asyncFN={ () => sum(234, 234) }
						/>

						<FAButton 
							disabled={ false }
							title={ buttonType.primaryDisabled }
							btnType={ buttonType.primaryDisabled }
							asyncFN={ () => sum(234, 234) }
						/>

						<FAButton 
							disabled={ true }
							title={ buttonType.primaryDisabledLoading }
							btnType={ buttonType.primaryDisabled }
							asyncFN={ () => sum(234, 234) }
						/>

						<FAButton 
							disabled={ false }
							title={ buttonType.secondary }
							btnType={ buttonType.secondary }
							asyncFN={ () => sum(234, 234) }
						/>

						<FAButton 
							disabled={ false }
							title={ buttonType.secondaryDisabled }
							btnType={ buttonType.secondaryDisabled }
							asyncFN={ () => sum(234, 234) }
						/>

						<FAButton 
							disabled={ true }
							title={ buttonType.secondaryDisabledLoading }
							btnType={ buttonType.secondaryDisabled }
							asyncFN={ () => sum(234, 234) }
						/>

						<FAButton 
							disabled={ false }
							title={ buttonType.error }
							btnType={ buttonType.error }
							asyncFN={ () => sum(234, 234) }
						/>

						<FAButton 
							disabled={ true }
							title={ buttonType.errorDisabled }
							btnType={ buttonType.errorDisabled }
							asyncFN={ () => sum(234, 234) }
						/>

						<FAButton 
							disabled={ true }
							title={ buttonType.label }
							btnType={ buttonType.label }
							asyncFN={ () => sum(234, 234) }
						/>

						<FAButton 
							disabled={false}
							title='Default' 
							btnType={ "Broken" }
							asyncFN={ () => sum(234, 234) }
						/>

					{/* <Header />
					{global.HermesInternal == null ? null : (
						<View style={styles.engine}>
							<Text style={styles.footer}>Engine: Hermes</Text>
						</View>
					)} */}
					{/* <View style={styles.body}>
						<View style={styles.sectionContainer}>
							<Text style={styles.sectionTitle}>Step One: It</Text>
							<Text style={styles.sectionDescription}>
								Edit <Text style={styles.highlight}>App.tsx</Text> to change
								this screen and then come back to see your edits.
							</Text>
						</View>
						<View style={styles.sectionContainer}>
							<Text style={styles.sectionTitle}>See Your Changes</Text>
							<Text style={styles.sectionDescription}>
								<ReloadInstructions />
							</Text>
						</View>
						<View style={styles.sectionContainer}>
							<Text style={styles.sectionTitle}>Debug</Text>
							<Text style={styles.sectionDescription}>
								<DebugInstructions />
							</Text>
						</View>
						<View style={styles.sectionContainer}>
							<Text style={styles.sectionTitle}>Learn More</Text>
							<Text style={styles.sectionDescription}>
								Read the docs to discover what to do next:
							</Text>
						</View>
						<LearnMoreLinks />
					</View> */}
				</ScrollView>
			</SafeAreaView>
		</>
	);
};

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: Colors.lighter,

	},
	engine: {
		position: 'absolute',
		right: 0,
	},
	body: {
		backgroundColor: Colors.white,
	},
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
		color: Colors.black,
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
		color: Colors.dark,
	},
	highlight: {
		fontWeight: '700',
	},
	footer: {
		color: Colors.dark,
		fontSize: 12,
		fontWeight: '600',
		padding: 4,
		paddingRight: 12,
		textAlign: 'right',
	},
});

export default App;
