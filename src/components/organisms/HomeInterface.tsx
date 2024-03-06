import React from 'react';
import {View, StyleSheet} from 'react-native';
import Banner from '../../components/atoms/Banner';
import DetailCard from '../../components/molecules/DetailCard';
import AmenitiesCard from '../atoms/AmenitiesCard';

const HomeInterface = () => {
  return (
    <View style={{flex: 1}}>
      <Banner />
      <View style={styles.detailContainer}>
        <DetailCard />
        <AmenitiesCard />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    position: 'absolute',
    top: 120,
    left: 25,
  },
});

export default HomeInterface;
