import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors} from '../../utils/colors';
import Plane from '../atoms/Plane';

type AbreviationProps = {};

const Abreviation: React.FC<AbreviationProps> = () => {
  return (
    <View style={styles.abreviationContainer}>
      <Text style={styles.abreviationText}>MEX</Text>
      <Plane />
      <Text style={styles.abreviationText}>DUB</Text>
    </View>
  );
};

type TicketInfoProps = {
  borderTime: string;
  startTime: string;
  arrivalTime: string;
};

const TicketInfo: React.FC<TicketInfoProps> = ({
  borderTime,
  startTime,
  arrivalTime,
}) => {
  return (
    <View style={{marginTop: 20}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text
              style={[styles.textInfo, {textAlign: 'left', marginLeft: -1}]}>
              Abordaje
            </Text>
            <Text style={styles.titleInfo}>{borderTime}</Text>
          </View>
          <View
            style={{
              marginLeft: 20,
            }}>
            <Text
              style={[styles.textInfo, {textAlign: 'left', marginLeft: -1}]}>
              Salida
            </Text>
            <Text style={styles.titleInfo}>{startTime}</Text>
          </View>
        </View>
        <View>
          <Text
            style={[
              styles.textInfo,
              {
                textAlign: 'right',
              },
            ]}>
            Aterrizaje
          </Text>
          <Text style={styles.titleInfo}>{arrivalTime}</Text>
        </View>
      </View>
    </View>
  );
};

type PassengerInfoProps = {
  name: string;
  seat: string;
};

const PassengerInfo: React.FC<PassengerInfoProps> = ({name, seat}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
      }}>
      <View style={{}}>
        <Text style={[styles.textInfo, {textAlign: 'left', marginLeft: -1}]}>
          Pasajero
        </Text>
        <Text style={styles.titleInfo}>{name}</Text>
      </View>
      <View>
        <Text style={[styles.textInfo, {textAlign: 'right', marginLeft: -1}]}>
          Asiento
        </Text>
        <Text
          style={[
            styles.titleInfo,
            {
              textAlign: 'right',
            },
          ]}>
          {seat}
        </Text>
      </View>
    </View>
  );
};

type CitiesProps = {
  arrivalTime: string;
  borderTime: string;
  startTime: string;
  name: string;
  seat: string;
};

const Cities: React.FC<CitiesProps> = ({
  arrivalTime,
  borderTime,
  startTime,
  name,
  seat,
}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.travel}>
          <Text style={styles.title}>Ciudad de México</Text>
          <Text style={styles.title}>Dublín</Text>
        </View>
        <Abreviation />
        <TicketInfo
          arrivalTime={arrivalTime}
          borderTime={borderTime}
          startTime={startTime}
        />

        <Image
          source={require('../../../assets/images/dashedLine.png')}
          resizeMode="contain"
        />
        <PassengerInfo name={name} seat={seat} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.blueTitle,
  },
  abreviationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  abreviationText: {
    fontSize: 32,
    color: 'black',
    fontWeight: '600',
    fontFamily: 'Montserrat',
  },
  travel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleInfo: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.blueTitle,
  },
  textInfo: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.gray,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  divider: {
    borderStyle: 'dashed',
    marginTop: 10,
    borderBottomColor: colors.ligthGray,
    borderBottomWidth: 1,
    width: 'auto',
  },
});

export default Cities;
