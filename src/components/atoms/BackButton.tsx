import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {colors} from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.goBack()}>
      <Image
        source={require('../../../assets/images/leftArrow.png')}
        style={styles.images}
      />
      <Text style={styles.title}>Atrás</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 5,
    height: 30,
    width: 71,
    borderWidth: 1,
    borderColor: colors.ligthGray,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  images: {
    width: 10,
    height: 10,
    marginRight: 5,
  },
  title: {
    fontSize: 12,
    color: colors.blueTitle,
    fontWeight: '700',
  },
});

export default BackButton;
