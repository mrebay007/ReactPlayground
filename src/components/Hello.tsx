// src/components/Hello.tsx

import * as React from 'react';
import { PureComponent } from 'react';
import {
		Text,
		Image,
		View,
		Alert, 
		TouchableOpacity,
		StyleSheet, 
		ActivityIndicator,
		Platform
 } from 'react-native';

 export enum buttonType {
	primary = 'Primary',
	primaryDisabled = 'PrimaryDisabled',
	primaryDisabledLoading = 'PrimaryDisabledLoading', 
	secondary = 'Secondary',
	secondaryDisabled = 'SecondaryDisabled',
	secondaryDisabledLoading = 'SecondaryDisabledLoading',
	error = 'Error',
	errorDisabled = 'ErrorDisabled',
}


interface ShadeFn {
	(): Promise<any>
}

interface ShadeCtrlButtonProps {
	asyncFN: ShadeFn
	btnType: string
	title: string
    disabled: boolean
}

interface ShadeCtrlButtonState {
	isReady: boolean
	buttonType: string
}

const TAG = 'FA Button: '

export class Hello extends PureComponent<ShadeCtrlButtonProps, ShadeCtrlButtonState> {
	isReady = true
	constructor(props: ShadeCtrlButtonProps) {
		super(props)
		this.state = {
			isReady: true,
			buttonType: this.props.btnType
		}
	}

	execute = async () => {
		if (this.isReady) {
			console.warn(TAG, "Success")
			this.setState({ isReady: false })
			this.isReady = false
			try {
				const response = await this.props.asyncFN()
				this.setState({ isReady: true })
				this.isReady = true
			} catch (error) {
				console.warn(TAG, "Error ")
				this.setState({ isReady: true })
				this.isReady = true
			}
		} else {
			console.debug(TAG, "Skipping button press - waiting on ")
		}
	}

	render = () => {
		const { isReady, buttonType } = this.state
		let buttonStyle = {}
		let textStyle = {}
		
		switch(buttonType) {
			case 'Primary': {
				buttonStyle = { ...styles.btn, ...styles.primary }
				textStyle = { ...styles.btnText, ...styles.btnTextDark }
				break
			}	
			case 'PrimaryDisabled': {
				buttonStyle = { ...styles.btn, ...styles.primaryDisabled }
				textStyle = { ...styles.btnText, ...styles.btnTextLight }
				break
			}	
			case 'PrimaryDisabledLoading': {
				buttonStyle = { ...styles.btn, ...styles.primaryDisabled }
				textStyle = { ...styles.btnText, ...styles.btnTextLight }
				break
			}
			case 'Secondary': {
				buttonStyle = { ...styles.btn, ...styles.secondary }
				textStyle = { ...styles.btnText, ...styles.btnTextDark }
				// console.info('THIS COOL => ', buttonStyle)
				break
			}	
			case 'SecondaryDisabled': {
				buttonStyle = { ...styles.btn, ...styles.secondaryDisabled }
				textStyle = { ...styles.btnText, ...styles.btnTextLight }
				break
			}	
			case 'SecondaryDisabledLoading': {
				buttonStyle = { ...styles.btn, ...styles.secondaryDisabled }
				textStyle = { ...styles.btnText, ...styles.btnTextLight }
				break
			}
			case 'Error': {
				buttonStyle = { ...styles.btn, ...styles.error }
				textStyle = { ...styles.btnText, ...styles.btnTextLight }
				break
			}
			case 'ErrorDisabled': {
				buttonStyle = { ...styles.btn, ...styles.errorDisabled }
				textStyle = { ...styles.btnText, ...styles.btnTextLight }
				break
			}
			default: {
				buttonStyle = styles.btn
				textStyle = styles.btnText
				break
			}
		}
	  
		return (
			<TouchableOpacity 
				style={ buttonStyle }
				disabled={ !this.isReady }
				onPress={
					() => { this.execute() }
				}>
					<Text style={ textStyle }>
						{this.props.title}
					</Text>
					{ !this.isReady &&
					<ActivityIndicator
						style={ styles.loading }
						color='black'
						// hidesWhenStopped={true}
						size='small'
						animating={ !this.isReady }
					/>
					}
					
			</TouchableOpacity>
		
			// <Button
			//     title={this.props.title}
			//     icon={this.props.icon}
			//     type={this.props.type}
			//     buttonStyle={this.props.buttonStyle}
			//     disabled={!this.isReady}
			//     loading={!this.state.isReady}
			//     onPress={
			//         () => {
			//             this.execute()
			//         }
			//     }
			// />
		)
  	}
}

export default Hello;

const grey04 = 				'#EFEFEF'
const grey10 =				'#DDDDDD'
const grey15 = 				'#BEBEBE'
const grey25 = 				'#AAAAAA'
const grey85 = 				'#303030'

const primary = 			'#79C534'
const primaryDisabled = 	'#D0EFBE'
const secondary = 			'#FFD623'
const secondaryDisabled = 	'#FFF4C4'
const tertiary = 			grey25
const tertiaryDisabled = 	grey10
const error = 				'#C53434'
const errorDisabled = 		'#F2ABAD'


const styles = StyleSheet.create({

	btn: {
		flex: 1,
		flexDirection: 'row', 
		borderRadius: 8,
		borderColor: 'black',
		borderWidth: 2, 
		backgroundColor: 'lightgrey', 
		justifyContent: 'center', 
		alignItems: 'center',
		paddingVertical: 8,
		margin: 8, 
		marginLeft: 4, 
	},

	btnText: {
		fontSize: 28,
		fontFamily: Platform.OS == 'ios' ? "AvenirNext-Bold" : "sans-serif-medium",
	},

	btnTextDark: {
		color: 'black',
	},

	btnTextLight: {
		color: 'darkgrey',
	},

	loading: {
		// flex: 0.2,
		marginHorizontal: 8,
		padding: 4,
	},

	primary: {
		backgroundColor: primary,
		borderColor: 'black',
	},
	primaryDisabled: {
		backgroundColor: primaryDisabled,
		borderColor: grey25
	},

	secondary: {
		backgroundColor: secondary,
		borderColor: 'black',
	},
	secondaryDisabled: {
		backgroundColor: secondaryDisabled,
		borderColor: grey25
	},

	error: {
		backgroundColor: error
	},
	errorDisabled: {
		backgroundColor: errorDisabled,
		borderColor: grey15,
	},	

})