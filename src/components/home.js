import React from 'react';
import {View, Button} from 'react-native';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent: 'center', alignItems: 'center',}}>
        <Button
          title="One"
          onPress={() =>
            navigate('One', { name: 'One' })
          }
        />
        <Button
          title="Two"
          onPress={() =>
            navigate('Two', { name: 'Two' })
          }
        />
        <Button
          title="Three"
          onPress={() =>
            navigate('Three', { name: 'Three' })
          }
        />
        <Button
          title="Four"
          onPress={() =>
            navigate('Four', { name: 'Four' })
          }
        />
      </View>
    );
  }
}