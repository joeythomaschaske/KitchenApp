import Home from './screens/Home/Home';
import {AppRegistry} from 'react-native';
import { StackNavigator } from 'react-navigation';

export const app = StackNavigator({
    Home  : { 
      screen: Home 
    }
  });

AppRegistry.registerComponent('app', () => app);