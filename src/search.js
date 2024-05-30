



// import { View, StyleSheet, TextInput, Dimensions, Alert } from 'react-native';
// import React, { useState } from 'react';
// import { EvilIcons } from '@expo/vector-icons';

// const WeatherSearch = ({ fetchWeatherData }) => {
//   const [cityName, setCityName] = useState('');

//   const handleSearch = () => {
//     if (cityName.trim()) {
//       fetchWeatherData(cityName);
//       setCityName('');
//     } else {
//       Alert.alert(
//         "Error",
//         "Please enter a city name",
//         [{ text: "OK" }],
//         { cancelable: false }
//       );
//     }
//     fetchWeatherData("madurai");
//   };

//   return (
//     <View style={styles.searchBar}>
//       <TextInput
//         placeholder='Search City'
//         value={cityName}
//         onChangeText={(text) => setCityName(text)}
//         style={styles.textInput}
//       />
//       <EvilIcons name='search' size={28} color='black' onPress={handleSearch} />
//     </View>
//   );
// };

// export default WeatherSearch;

// const styles = StyleSheet.create({
//   searchBar: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     width: Dimensions.get('window').width - 40, // Updated width calculation
//     borderWidth: 1.5,
//     paddingVertical: 10,
//     borderRadius: 25,
//     marginHorizontal: 20, // Adjusted for better responsiveness
//     paddingHorizontal: 10,
//     backgroundColor: 'lightgray',
//   },
//   textInput: {
//     flex: 1,
//     paddingHorizontal: 10,
//     borderWidth: 0,
//     color: 'black',

//   },
// });






import { View, StyleSheet, TextInput, Dimensions, Alert } from 'react-native';
import React, { useState } from 'react';
import { EvilIcons } from '@expo/vector-icons';

const WeatherSearch = ({ fetchWeatherData }) => {
  const [cityName, setCityName] = useState('');

  const handleSearch = () => {
    if (cityName.trim()) {
      fetchWeatherData(cityName);
      setCityName('');
    } else {
      Alert.alert(
        "Error",
        "Please enter a city name",
        [{ text: "OK" }],
        { cancelable: false }
      );
    }
    fetchWeatherData("madurai");
  };

  return (
    <View style={styles.searchBar}>
      <TextInput
        placeholder='Search City'
        value={cityName}
        onChangeText={(text) => setCityName(text)}
        style={styles.textInput}
      />
      <EvilIcons name='search' size={28} color='black' onPress={handleSearch} />
    </View>
  );
};

export default WeatherSearch;

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width - 40, // Updated width calculation
    borderWidth: 1.5,
    paddingVertical: 10,
    borderRadius: 25,
    marginHorizontal: 20, // Adjusted for better responsiveness
    paddingHorizontal: 10,
    backgroundColor: 'lightgray',
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    borderWidth: 0, // Ensures no border is displayed
    color: 'black', // Ensures text is visible
    userSelect: 'none', // Disables text selection on web platforms
  },
});
