import React from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import {colors} from '../../utils/colors';

type StepperProps = {
  step: number;
};

const Stepper = ({step}: StepperProps) => {
  return (
    <View style={styles.stepperContainer}>
      <View style={styles.smallDot} />
      <View style={styles.line} />
      <View style={styles.dot}>
        <Text style={styles.title}>{step}</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.smallDot} />
    </View>
  );
};

const {width} = Dimensions.get('window');
const lineLength = width * 0.15;

const styles = StyleSheet.create({
  stepperContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  line: {
    width: lineLength,
    height: 2,
    backgroundColor: colors.blueTitle,
  },
  dot: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: colors.blueTitle,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.blueTitle,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Stepper;
