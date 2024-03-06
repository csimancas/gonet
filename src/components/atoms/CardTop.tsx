import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Dots from './Dots';
import {colors} from '../../utils/colors';

const CardTop = () => {
  return (
    <View style={styles.dotContainer}>
      <Dots />
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.text}>Vuelo</Text>
          <Text style={styles.title}>AVA01</Text>
        </View>
        <View style={{marginLeft: 20}}>
          <Text style={styles.text}>Sala</Text>
          <Text style={styles.title}>101E</Text>
        </View>
      </View>
    </View>
  );
};

export default CardTop;

const styles = StyleSheet.create({
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.blueTitle,
  },
  text: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.ligthGray,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginLeft: 20,
  },
});
