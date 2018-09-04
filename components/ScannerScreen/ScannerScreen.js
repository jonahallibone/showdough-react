import React from 'react';
import { StyleSheet, Text, View , Button,NavigatorIOS} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

export class ScannerScreen extends React.Component {
  static navigationOptions = {
    title: 'Scanner',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('Profile', { name: 'Jane' })
        }
      />
    );
  }
}
