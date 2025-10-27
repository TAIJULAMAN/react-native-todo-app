import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const settingsScreen = () => {
    return (
        <View
            style={styles.container}
        >
            <Text style={styles.text2}>SettingsPage</Text>
            <Link href="/about">About</Link>
        </View>
    )
}

export default settingsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text2: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
});