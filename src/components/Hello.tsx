// src/components/Hello.tsx

import * as React from 'react';
import {
    Text,
    Image,
    View,
    Alert, 
    TouchableOpacity,
    StyleSheet,
 } from 'react-native';

export interface Props {
  counter: number;
  name?: string;
  enthusiasmLevel?: number;
  btnType: string;
}

// interface ShadeFn {
//   (): Promise<any>
// }
// interface _ShadeCtrlButtonProps {
//   asyncFN: ShadeFn
// }
// type ShadeCtrlButtonProps = ButtonProps & _ShadeCtrlButtonProps
// interface ShadeCtrlButtonState {
//   isReady: boolean
// }

function Hello( { name, enthusiasmLevel = 1, btnType }: Props ) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }


//   execute = async () => {
//     if (this.isReady) {
//         Logger.warn(TAG, "Success")
//         this.setState({ isReady: false })
//         this.isReady = false
//         try {
//             const response = await this.props.asyncFN()
//             this.setState({ isReady: true })
//             this.isReady = true
//         } catch (error) {
//             Logger.warn(TAG, "Error ")
//             this.setState({ isReady: true })
//             this.isReady = true
//         }
//     } else {
//         Logger.debug(TAG, "Skipping button press - waiting on ")
//     }
// }
  const btnName = btnType
  const items: any = []
  console.log('==========', items)

  return (

    <TouchableOpacity 
        style={ [styles.btn, styles.error] }>
            <Text style={{ fontSize: 32, color: 'white'}}>
                {btnName}
            </Text>
    </TouchableOpacity>

  );
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