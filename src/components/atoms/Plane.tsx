import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
import {DocumentTitleOptions} from '@react-navigation/native';

type DottedDividerProps = {
  color: string;
  thickness: number;
  width: string;
};

const DottedDivider = ({color, thickness, width}: DottedDividerProps) => {
  return (
    <>
      <View
        style={[
          styles.divider,
          {
            borderBottomColor: colors.blueTitle,
            borderBottomWidth: 1,
            width: width,
          },
        ]}
      />
      <Image
        source={require('../../../assets/images/plane.png')}
        style={styles.plane}
      />
    </>
  );
};

const styles = StyleSheet.create({
  divider: {
    borderStyle: 'dashed',
    marginHorizontal: 2,
    marginBottom: 20,
  },
  plane: {
    width: 38,
    height: 42,
    resizeMode: 'contain',
    tintColor: colors.blueTitle,
    position: 'absolute',
    left: 125,
    zIndex: 1,
  },
});

export default DottedDivider;
