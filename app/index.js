import Home from './screens/Home/Home';
import AddGroceries from './screens/AddGroceries/AddGroceries';
import {AppRegistry} from 'react-native';
import { StackNavigator } from 'react-navigation';

export const app = StackNavigator({
    Home  : { 
      screen: Home 
    }, 
    AddGroceries : {
      screen: AddGroceries
    }
  });

AppRegistry.registerComponent('app', () => app);