import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import AuthInterface from '../components/organisms/AuthInterface';

const Auth = () => {
  return (
    <View style={styles.container}>
      <AuthInterface />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Auth;
