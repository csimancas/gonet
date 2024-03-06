import React from 'react';
import {Text as RNText, StyleSheet} from 'react-native';

interface TextProps {
  children: string;
  style?: object;
}

const Text = ({children, style}: TextProps) => {
  return <RNText style={[styles.text, style]}>{children}</RNText>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat-Regular',
  },
});

export default Text;
