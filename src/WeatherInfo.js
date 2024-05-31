import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import React from 'react';
import WeatherSearch from './search';

const WeatherInfo = ({ weatherData, fetchWeatherData }) => {

    //responsive in width
    const { width } = useWindowDimensions();

    if (!weatherData) {
        return (
            <SafeAreaView style={styles.container}>
                <WeatherSearch fetchWeatherData={fetchWeatherData} />
            </SafeAreaView>
        );
    }

    const {
        name,
        visibility,
        weather: [{ icon, description }],
        main: { temp, humidity, feels_like },
        wind: { speed },
        sys: { sunrise, sunset },
    } = weatherData;

    return (
        <View style={styles.container}>
            <WeatherSearch style={styles.fixedSearch} fetchWeatherData={fetchWeatherData} />
            <ScrollView >
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.title}>{name}</Text>
                </View>
                <View style={styles.logo}>
                    <Image style={styles.largeIcon} source={{ uri: `http://openweathermap.org/img/wn/${icon}@4x.png` }} />
                    <Text style={styles.currentTemp}>{temp} °C</Text>
                </View>
                <Text style={styles.description}>{description}</Text>
                <View style={styles.extraInfo}>
                    <View style={[styles.info, { width: width / 2.5 }]}>
                        <Image style={styles.smallIcon} source={require('../assets/temp.png')} />
                        <Text style={styles.infoText}>{feels_like} °C</Text>
                        <Text style={styles.infoText}>Feels Like</Text>
                    </View>
                    <View style={[styles.info, { width: width / 2.5 }]}>
                        <Image style={styles.smallIcon} source={require('../assets/humidity.png')} />
                        <Text style={styles.infoText}>{humidity} %</Text>
                        <Text style={styles.infoText}>Humidity</Text>
                    </View>
                </View>
                <View style={styles.extraInfo}>
                    <View style={[styles.info, { width: width / 2.5 }]}>
                        <Image style={styles.smallIcon} source={require('../assets/visibility.png')} />
                        <Text style={styles.infoText}>{visibility} m</Text>
                        <Text style={styles.infoText}>Visibility</Text>
                    </View>
                    <View style={[styles.info, { width: width / 2.5 }]}>
                        <Image style={styles.smallIcon} source={require('../assets/windspeed.png')} />
                        <Text style={styles.infoText}>{speed} m/s</Text>
                        <Text style={styles.infoText}>Wind Speed</Text>
                    </View>
                </View>
                <View style={styles.extraInfo}>
                    <View style={[styles.info, { width: width / 2.5 }]}>
                        <Image style={styles.smallIcon} source={require('../assets/sunrise.png')} />
                        <Text style={styles.infoText}>{new Date(sunrise * 1000).toLocaleTimeString()}</Text>
                        <Text style={styles.infoText}>Sunrise</Text>
                    </View>
                    <View style={[styles.info, { width: width / 2.5 }]}>
                        <Image style={styles.smallIcon} source={require('../assets/sunset.png')} />
                        <Text style={styles.infoText}>{new Date(sunset * 1000).toLocaleTimeString()}</Text>
                        <Text style={styles.infoText}>Sunset</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default WeatherInfo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fixedSearch: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        padding: 10,
        backgroundColor: '#fff', 
    },
  
    title: {
        width: '100%',
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 'bold',
        color: '#e96e50',
        marginTop: 10,
    },
    logo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginVertical: 20,
    },
    largeIcon: {
        width: 100,
        height: 150,
    },
    currentTemp: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    description: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    extraInfo: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 5,
        marginBottom: 20,
    },
    info: {
        backgroundColor: '#D0EAFA',
        padding: 10,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    smallIcon: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
    infoText: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 5,
    },
});
