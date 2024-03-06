import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const array = [
  {
    title: 'Equipaje incluido',
    description: '1 pieza de 50cm x 30cm x 40cm',
    icon: 'suitcase',
  },
  {
    title: 'Asiento premium',
    description: '2B - Pasillo',
    icon: 'seatUser',
  },
  {
    title: 'Transporte al aeropuerto',
    description: 'Usa el cupon: 123123 en Uber',
    icon: 'bus',
  },
];

const imageIcon = (type: string) => {
  switch (type) {
    case 'suitcase':
      return require('../../../assets/images/suitcases.png');
    case 'seatUser':
      return require('../../../assets/images/seatUser.png');
    case 'bus':
      return require('../../../assets/images/Bus.png');
  }
};

const AmenitiesCard = () => {
  return (
    <View style={styles.container}>
      {array.map(item => {
        return (
          <View style={styles.boxContainer} key={item.title}>
            <Image
              source={imageIcon(item.icon)}
              style={{width: 32, height: 32, marginRight: 10}}
            />
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
    marginTop: 25,
  },
  boxContainer: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 10,
    flexDirection: 'row',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  description: {
    fontSize: 12,
  },
});

export default AmenitiesCard;
