import React from 'react';
import {View, Dimensions, Image, Text, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

const Banner = () => {
  return (
    <View>
      <Image
        source={require('../../../assets/images/dublin.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Dublín</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    position: 'absolute',
    top: 30,
    left: 20,
    right: 20,
    bottom: 20,
    fontSize: 50,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
  },
  image: {width: width, height: 166.51},
});

export default Banner;
