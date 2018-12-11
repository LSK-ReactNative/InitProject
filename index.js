/** @format */

import {AppRegistry, YellowBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import codePush from 'react-native-code-push';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
YellowBox.ignoreWarnings(['Class RCTCxxModule']);

const AppT = codePush({ checkFrequency: codePush.CheckFrequency.ON_APP_RESUME, 
    installMode: codePush.InstallMode.IMMEDIATE  })(App);

AppRegistry.registerComponent(appName, () => AppT);
