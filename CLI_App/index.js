/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import store from './src/Reducer/store';
import { Provider } from 'react-redux';

const AppRedux = () => (
    <Provider store={store} >
        <App />
    </Provider>
)
AppRegistry.registerComponent(appName, () => AppRedux);

// AppRegistry.registerComponent(appName, () => App);
