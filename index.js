/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Hello from './src/components/Hello.tsx'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
