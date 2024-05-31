import { View, StyleSheet, TextInput, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import { EvilIcons } from '@expo/vector-icons';

const WeatherSearch = ({ fetchWeatherData }) => {
  const [cityName, setCityName] = useState('');
  const { width } = useWindowDimensions();

  const handleSearch = () => {
    if (cityName.trim()) {
      fetchWeatherData(cityName);
      setCityName('');
    } else {
      alert(
        "Please enter a city name",
      );
    }
  };

  return (
    <View style={[styles.searchBar, {width: width/1.5}]}>
      <TextInput
        style={styles.input}
        placeholder='Search City'
        value={cityName}
        onChangeText={(text) => setCityName(text)}
      />
      <EvilIcons name='search' size={39} color='black' onPress={handleSearch} />
    </View>

  );
};

export default WeatherSearch;

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
    height: 50,
    alignSelf: 'center'
  },
  input: {
    flex: 1,
    height: 30,
    marginRight: 10,
    fontSize: 16,
    paddingVertical: 0,
    borderWidth: 0,
  },
});




