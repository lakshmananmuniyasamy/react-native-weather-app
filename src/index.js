import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Constants from 'expo-constants'
import WeatherInfo from './WeatherInfo'

const API_KEY = '1def0db8cd4f63a4033412305ffe151f'

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchWeatherData = async (cityName) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
            if (response.ok) {
                const data = await response.json()
                setWeatherData(data)
            } else {
                setWeatherData(null)
                alert("City not found")
                fetchWeatherData("Madurai")
            }
        } catch (error) {
            console.error("Error fetching weather data:", error)
            alert( "Failed to fetch weather data")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchWeatherData("Madurai")
    }, [])

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="red" />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Weather App</Text>
            </View>
            <WeatherInfo weatherData={weatherData} fetchWeatherData={fetchWeatherData} />
        </View>
    )
}

export default Weather

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCF5DB',
        paddingTop: Constants.statusBarHeight,
    },
    header: {
        alignItems: 'center',
        backgroundColor: '#C5D3EF',
        height: 80,
        justifyContent: 'center'
    },
    headerTitle: {
        fontSize: 29,
        fontWeight: 'bold'
    }
})


