/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
// import HellowWorldApp from './HellowWorldApp.js';
// import LostsOfGreetings from './GreetingList.js';
// import TextInputs from './TextInput.js';
// import ButtonList from './ButtonList.js';
// import FlatListBasics from './FlatList.js';
import SectionListBasics from './SectionList.js';

AppRegistry.registerComponent(appName, () => SectionListBasics);
