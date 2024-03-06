import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

type DotsProps = {
  totalDots: number;
  currentIndex: number;
};

const ScrollDots = ({totalDots, currentIndex}: DotsProps) => {
  return (
    <View style={styles.container}>
      {[...Array(totalDots).keys()].map(index => (
        <View
          key={index}
          style={[
            styles.dot,
            {
              backgroundColor:
                index === currentIndex ? colors.blueTitle : colors.gray,
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
});

export default ScrollDots;
