// src/components/Hello.tsx

import * as React from 'react';
import {
    Text,
    Image,
    View,
    Alert,, TouchableOpacity
 } from 'react-native';

export interface Props {
  counter: number;
  name?: string;
  enthusiasmLevel?: number;
}

function Hello({ name, enthusiasmLevel = 1 }: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }


  return (
    <TouchableOpacity 
      style={{ backgroundColor: '#BADA55' }}>
          <Text style={{ fontSize: 60}}>
              Counter: 
          </Text>
    </TouchableOpacity>

  );
}

export default Hello;

export function fizzBuzz(number: any) {
    let numberType = typeof number
    console.log('=============== Number Type', numberType)
    switch(numberType) {
      case 'string':
        console.log('Not a number')
        break
      case 'undefined':
        console.log('Value is undefined')
        break
      case 'number':
        console.log('Yay, it\'s a number')
        switch(number) {
        }
    }
}




export function speedLimit(number: any) {
 number = Math.floor(number)
  switch(number) {
    case (number > 0 && number < 70):
      return 'Ok'
    case (number > 70 && number < 75):
      return 'Points: 1'
    case (number > 70 && number < 150):
      return 'Points: 1'
    case (number > 150): 
      return 'Driver Suspended'
  }
}