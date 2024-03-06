import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {colors} from '../../utils/colors';

const DottedDivider = () => {
  return (
    <View style={{width: 160}}>
      <Image
        source={require('../../../assets/images/dashes.png')}
        resizeMode="contain"
        style={styles.dashes}
      />
      <Image
        source={require('../../../assets/images/plane.png')}
        style={styles.plane}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  plane: {
    width: 38,
    height: 42,
    resizeMode: 'contain',
    tintColor: colors.blueTitle,
    position: 'absolute',
    left: 60,
    zIndex: 1,
  },
  dashes: {
    width: 150,
    resizeMode: 'contain',
    tintColor: colors.blueTitle,
    marginHorizontal: 2,
    position: 'absolute',
    bottom: 20,
  },
});

export default DottedDivider;
