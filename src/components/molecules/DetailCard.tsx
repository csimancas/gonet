import React from 'react';
import {View, Dimensions, Pressable, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import Schedule from '../atoms/Schedule';
import Button from '../atoms/Button';

import {colors} from '../../utils/colors';

const {width} = Dimensions.get('window');

const QuestionButton = () => {
  return (
    <Pressable style={styles.question}>
      <Icon name="question" size={12} color={'white'} />
    </Pressable>
  );
};
const DetailCard = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={styles.title}>Tu vuelo de mañana</Text>
            <QuestionButton />
          </View>
          <Schedule />
          <View style={styles.divider} />
          <View style={styles.buttonContainer}>
            <Button
              label="cambiar vuelo"
              color={colors.ligthGray}
              left
              action={() => console.log('2222')}
            />
            <Button
              label="pase de abordar"
              color={colors.blueTitle}
              rigth
              action={() => navigation.navigate('Detail')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  card: {
    padding: 20,
    width: width - 50,
    backgroundColor: 'white',
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  question: {
    backgroundColor: colors.ligthGray,
    height: 16,
    width: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  divider: {
    height: 1,
    backgroundColor: colors.ligthGray,
    marginVertical: 20,
  },
  buttonContainer: {flexDirection: 'row', justifyContent: 'space-between'},
});

export default DetailCard;
