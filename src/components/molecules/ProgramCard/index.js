import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {IcCeklist} from '../../../asset';
import * as Progress from 'react-native-progress';
import {Gap} from '../../atoms';
import Number from '../Number';
import Moment from 'moment';
import {extendMoment} from 'moment-range';
import ProgressBarr from '../ProgressBar';

const moment = extendMoment(Moment);

const ProgramCard = ({image, judul, nominal, date, by, value, max, onPres}) => {
  const start = new Date();
  const end = new Date(date);
  const range = moment.range(start, end);
  const formatDate = range.diff('days');

  // const [total, setTotal] = useState('Rp.0');

  // console.log('Result: ', total);

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPres}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View style={styles.body}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.judul}>
            {judul}
          </Text>
          <View style={styles.pemilikProgram}>
            <Text style={styles.lembaga}>{by}</Text>
            <IcCeklist style={styles.ceklist} />
          </View>
          <ProgressBarr value={value} max={max} />
          <View style={styles.detail}>
            <Number
              number={nominal <= 0 ? 'Rp.0' : nominal}
              style={styles.jml}
            />
            <Gap width={2} />
            <Text style={styles.terkumpul}>Terkumpul</Text>
            <Gap width={10} />
            <Text style={styles.date}>{formatDate} hari lagi</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProgramCard;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 24,
    width: 200,
    height: 210,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOpacity: {width: 0, height: 7},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    overflow: 'hidden',
  },
  image: {width: 200, height: 140, resizeMode: 'cover'},
  body: {
    width: 200,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  judul: {
    fontSize: 11,
    fontFamily: 'roboto-bold',
    color: '#0B2B72',
  },
  pemilikProgram: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detail: {flexDirection: 'row'},
  lembaga: {color: '#7392D4', fontSize: 9, fontFamily: 'roboto-medium'},
  ceklist: {marginHorizontal: 2},
  terkumpul: {fontFamily: 'roboto-medium', fontSize: 9, color: '#0B2B72'},
  date: {fontFamily: 'roboto-medium', fontSize: 10, color: '#0B2B72'},
  jml: {fontFamily: 'roboto-bold', fontSize: 10, color: '#0B2B72'},
});
