import React from 'react';
import {Button} from 'react-native';

export default class Three extends React.Component {
  static navigationOptions = {
    title: 'Three',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="One"
        onPress={() =>
          navigate('One', { name: 'One' })
        }
      />
    );
  }
}