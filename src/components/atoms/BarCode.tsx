import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const BarCode = () => {
  return (
    <View style={styles.barCode}>
      <Image
        source={require('../../../assets/images/barCode.png')}
        resizeMode="cover"
      />
      <Text style={styles.code}>A81NHD83301JAMPS</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  barCode: {
    alignItems: 'center',
    marginTop: 80,
  },

  code: {
    fontSize: 14,
    color: 'black',
    marginTop: 5,
    letterSpacing: 1,
  },
});

export default BarCode;
