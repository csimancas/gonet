import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

type ButtonProps = {
  label: string;
  action: () => void;
  color: string;
  left?: boolean;
  rigth?: boolean;
};
const Button = ({label, action, color, left, rigth}: ButtonProps) => {
  return (
    <Pressable
      style={[
        styles.container,
        {
          backgroundColor: color,
          marginRight: left ? 5 : 0,
          marginLeft: rigth ? 5 : 0,
        },
      ]}
      onPress={action}>
      <Text style={styles.title}>{label.toUpperCase()}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default Button;
