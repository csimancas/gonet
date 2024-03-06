import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import StepNumber from './StepNumber';
import {colors} from '../../utils/colors';

const Schedule = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'column',
        }}>
        <Text style={styles.title}>06:25</Text>
        <Text style={styles.subTitle}>MEX</Text>
      </View>
      <View>
        <StepNumber step={1} />
      </View>
      <View
        style={{
          flexDirection: 'column',
        }}>
        <Text style={styles.title}>23:00</Text>
        <Text style={styles.subTitle}>DUB</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  subTitle: {
    fontSize: 16,
    color: 'black',
  },
});

export default Schedule;
