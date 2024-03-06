import React from 'react';
import {FlatList, StyleSheet, View, Dimensions} from 'react-native';
import CardTop from '../atoms/CardTop';
import Cities from '../atoms/Cities';
import BarCode from '../atoms/BarCode';
import ScrollDots from '../atoms/ScrollDots';

const {width} = Dimensions.get('window');

const array = [1, 2, 3];

const Tickets = () => {
  const renderTickets = ({item, index}) => {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <CardTop />
          <Cities />
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
      <FlatList
        data={array}
        renderItem={renderTickets}
        keyExtractor={item => item.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    marginTop: 25,
    // paddingHorizontal: 25,
  },
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
