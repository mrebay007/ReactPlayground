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

// export interface Props {
// 	counter: number;
// 	name?: string;
// 	enthusiasmLevel?: number;
// 	// btnType: string;
// }


interface ShadeFn {
	(): Promise<any>
}

interface ShadeCtrlButtonProps {
	asyncFN: ShadeFn
	btnType: string
}

// type ShadeCtrlButtonProps = _ShadeCtrlButtonProps


interface ShadeCtrlButtonState {
	isReady: boolean
	buttonType: string
}

const TAG = 'Hello Mate: '
export class Hello extends PureComponent<ShadeCtrlButtonProps, ShadeCtrlButtonState> {
	isReady = true
	constructor(props: ShadeCtrlButtonProps) {
		super(props)
		const werd = this.props.btnType
		this.state = {
			isReady: true,
			buttonType: werd
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
		let buttonStyle = { ...styles.btn }
		
		switch(buttonType) {
			case 'Primary': {
				console.info('========= P: ', buttonType)
				buttonStyle = { ...styles.btn, ...styles.primary }
				// console.info('THIS COOL => ', buttonStyle)
				break
			}	
			case 'PrimaryDisabled': {
				console.info('========= PD: ', buttonType)
				buttonStyle = { ...styles.btn, ...styles.primaryDisabled }
				break
			}	
			case 'PrimaryDisabledLoading': {
				console.info('========= PDL: ', buttonType)
				buttonStyle = { ...styles.btn, ...styles.primaryDisabled }
				break
			}
			case 'Error': {
				console.info('========= Err: ', buttonType)
				buttonStyle = { ...styles.btn, ...styles.error }
				break
			}
			case 'ErrorDisabled': {
				console.info('========= Err: ', buttonType)
				buttonStyle = { ...styles.btn, ...styles.errorDisabled }
				break
			}
			default: {
				console.info('========= DEFAULT CATCH ALL')
				buttonStyle = styles.btn
				break
			}
		}
	  
		return (
			<TouchableOpacity 
				style={ buttonStyle }

				disabled={ !this.isReady }
				onPress={
					() => {
					this.execute()
					}
				}>
					<Text style={{ fontSize: 32, color: 'white'}}>
						These Are Titles {isReady}
					</Text>
					
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


const primary = '#79C534'
const primaryDisabled = '#D0EFBE'
const secondary = '#007CB7'
const secondaryDisabled = '#C7EAFB'
const error = '#C53434'
const errorDisabled = '#F2ABAD'


const styles = StyleSheet.create({

	btn: {
		flex: 1, 
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

	primary: {
		backgroundColor: primary
	},
	primaryDisabled: {
		backgroundColor: primaryDisabled,
	},

	error: {
		backgroundColor: error
	},
	errorDisabled: {
		backgroundColor: errorDisabled
	},

})