import React from 'react';
import { StyleSheet, Text, View, Image, Platform} from 'react-native';
import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox,
} from 'react-native-router-flux';

import MainFrame from "./view/MainFrame";

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Overlay key="overlay">
                    <Modal key="modal">
                        <Stack key="root" hideNavBar={true}>
                            <Scene key="mainFrame" initial component={MainFrame}/>
                        </Stack>
                    </Modal>
                </Overlay>
            </Router>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
