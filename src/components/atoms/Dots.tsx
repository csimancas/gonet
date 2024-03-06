import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../utils/colors';

const DotOne = () => {
  return (
    <View style={[styles.container, {zIndex: 1}]}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Text style={[styles.title, {marginRight: 7}]}>AV</Text>
        <Icon
          name="registered-trademark"
          size={8}
          color={'white'}
          style={{
            position: 'absolute',
            top: 9,
            left: 17,
          }}
        />
      </View>
    </View>
  );
};

const DotTwo = () => {
  return (
    <View
      style={[
        styles.dot,
        {
          backgroundColor: colors.ligthGray,
          position: 'absolute',
          top: 18,
          left: 35,
          height: 30,
          width: 30,
          borderRadius: 17.5,
        },
      ]}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Text style={[styles.title, {color: colors.blueTitle}]}>AIR</Text>
      </View>
    </View>
  );
};

const Dots = () => {
  return (
    <View>
      <DotOne />
      <DotTwo />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: colors.blueTitle,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: colors.blueTitle,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default Dots;
