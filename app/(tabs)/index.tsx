import { useTheme } from "@/hooks/useTheme";
import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode } = useTheme();
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Hello World</Text>
      <Text style={styles.text2}>My First React Native App</Text>
      <TouchableOpacity
        onPress={toggleDarkMode}
      >
        <Text>Toggle Theme</Text>
      </TouchableOpacity>
      <Link href="/about">About</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  },
  text2: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
});

