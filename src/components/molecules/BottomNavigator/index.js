import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  BtDonate,
  BtDonateActive,
  BtMyDonate,
  BtMyDonateActive,
  BtProfile,
  BtProfileActive,
} from '../../../asset';

const Icon = ({label, focus}) => {
  switch (label) {
    case 'Home':
      return focus ? <BtDonateActive /> : <BtDonate />;
    case 'Donasi Saya':
      return focus ? <BtMyDonateActive /> : <BtMyDonate />;
    case 'Profile':
      return focus ? <BtProfileActive /> : <BtProfile />;
    default:
      return <BtDonateActive />;
  }
};
const BottomNavigator = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Icon label={label} focus={isFocused} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
  },
});
