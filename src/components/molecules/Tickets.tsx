import React from 'react';
import {FlatList, StyleSheet, View, Dimensions} from 'react-native';
import BackButton from '../atoms/BackButton';
import CardTop from '../atoms/CardTop';
import Cities from '../atoms/Cities';
import BarCode from '../atoms/BarCode';
import ScrollDots from '../atoms/ScrollDots';

const {width} = Dimensions.get('window');

type PassengerData = {
  name: string;
  seat: string;
  borderTime: string;
  startTime: string;
  arrivalTime: string;
};

const array: PassengerData[] = [
  {
    name: 'Moe Szyslak',
    seat: '54F',
    borderTime: '05:55 AM',
    startTime: '06:25 AM',
    arrivalTime: '20:00 PM',
  },
  {
    name: 'Jane Szyslak',
    seat: '54F',
    borderTime: '05:55 AM',
    startTime: '06:25 AM',
    arrivalTime: '20:00 PM',
  },
  {
    name: 'Edna Szyslak',
    seat: '54F',
    borderTime: '05:55 AM',
    startTime: '06:25 AM',
    arrivalTime: '20:00 PM',
  },
];

const Tickets: React.FC = () => {
  const renderTickets = ({
    item,
    index,
  }: {
    item: PassengerData;
    index: number;
  }) => {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <CardTop />
          <Cities
            arrivalTime={item.arrivalTime}
            borderTime={item.borderTime}
            startTime={item.startTime}
            name={item.name}
            seat={item.seat}
          />
        </View>
        <View style={styles.secondCard}>
          <BarCode />
        </View>
        <View style={{marginTop: 30}}>
          <ScrollDots totalDots={array.length} currentIndex={index} />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.flatListContainer}>
      <View
        style={{
          marginBottom: 20,
          marginLeft: 20,
        }}>
        <BackButton />
      </View>
      <FlatList
        data={array}
        renderItem={renderTickets}
        keyExtractor={item => item.name}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {},
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  card: {
    width: width - 60,
    paddingVertical: 20,
    paddingHorizontal: 25,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 10,
    zIndex: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
  },
  secondCard: {
    width: width - 60,
    height: 200,
    marginTop: -50,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
  },
});

export default Tickets;
