import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Auth = () => {
  return (
    <View style={styles.container}>
      <Text>Auth Screen</Text>
      <Button title="Go to Home" onPress={() => console.log('hola')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Auth;
