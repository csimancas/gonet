import React from 'react';
import {View} from 'react-native';
import BackButton from '../atoms/BackButton';
import Tickets from '../molecules/Tickets';

const DetailInterface = () => {
  return (
    <View>
      <BackButton />
      <Tickets />
    </View>
  );
};

export default DetailInterface;
