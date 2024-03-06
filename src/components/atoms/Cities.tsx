import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors} from '../../utils/colors';
import Plane from '../atoms/Plane';

const Abreviation = () => {
  return (
    <View style={styles.abreviationContainer}>
      <Text style={styles.abreviationText}>MEX</Text>
      <Plane />
      <Text style={styles.abreviationText}>DUB</Text>
    </View>
  );
};

const TicketInfo = () => {
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
              Aboradaje
            </Text>
            <Text style={styles.titleInfo}>05:55 AM</Text>
          </View>
          <View
            style={{
              marginLeft: 20,
            }}>
            <Text
              style={[styles.textInfo, {textAlign: 'left', marginLeft: -1}]}>
              Salida
            </Text>
            <Text style={styles.titleInfo}>06:25 AM</Text>
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
          <Text style={styles.titleInfo}>20:00 PM</Text>
        </View>
      </View>
    </View>
  );
};

const PassengerInfo = () => {
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
        <Text style={styles.titleInfo}>Moe Szyslak</Text>
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
          54F
        </Text>
      </View>
    </View>
  );
};

const Cities = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.travel}>
          <Text style={styles.title}>Ciudad de México</Text>
          <Text style={styles.title}>Dublín</Text>
        </View>
        <Abreviation />
        <TicketInfo />
        {/* <View style={styles.divider} /> */}
        <Image
          source={require('../../../assets/images/dashedLine.png')}
          resizeMode="contain"
          style={styles.divider}
        />
        <PassengerInfo />
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
    marginTop: 10,
  },
});

export default Cities;
