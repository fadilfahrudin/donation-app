import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, useWindowDimensions} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {useDispatch, useSelector} from 'react-redux';
import {getProgramByTyeps} from '../../../redux/action';
import TabProgram from '../TabProgram';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
      marginLeft: 1,
    }}
    activeColor={{}}
    style={{backgroundColor: 'white'}}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'roboto-medium',
          color: focused ? '#0B2B72' : '#5D83D7',
        }}>
        {route.title}
      </Text>
    )}
  />
);
const banyakDiminati = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {banyak_diminati} = useSelector(state => state.homeReducer);
  useEffect(() => {
    navigation.addListener('focus', () => {
      dispatch(getProgramByTyeps('banyak_diminati'));
    });
  }, []);

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      {banyak_diminati.map(itemProgram => {
        return (
          <TabProgram
            onPress={() => navigation.navigate('ProgramDetail', itemProgram)}
            key={itemProgram.id}
            judul={itemProgram.title}
            image={{uri: itemProgram.banner_program}}
            max={itemProgram.target_amount}
            value={itemProgram.collage_amount}
            nominal={itemProgram.collage_amount}
          />
        );
      })}
    </ScrollView>
  );
};
const programBaru = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {program_baru} = useSelector(state => state.homeReducer);
  useEffect(() => {
    // navigation.addListener('focus', () => {
    dispatch(getProgramByTyeps('program_baru'));
    // });
  }, []);

  return (
    ///masih belum tampil
    <ScrollView style={{backgroundColor: 'white'}}>
      {program_baru.map(itemProgram => {
        return (
          <TabProgram
            onPress={() => navigation.navigate('ProgramDetail', itemProgram)}
            key={itemProgram.id}
            judul={itemProgram.title}
            image={{uri: itemProgram.banner_program}}
            max={itemProgram.target_amount}
            value={itemProgram.collage_amount}
            nominal={itemProgram.collage_amount}
          />
        );
      })}
    </ScrollView>
  );
};

const renderScene = SceneMap({
  1: banyakDiminati,
  2: programBaru,
});

const HomeTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Banyak Diminati'},
    {key: '2', title: 'Program Baru'},
  ]);

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      style={{flexGrow: 1}}
    />
  );
};

export default HomeTabSection;

const styles = StyleSheet.create({});
