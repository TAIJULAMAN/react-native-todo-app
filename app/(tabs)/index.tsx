import { createHomeStyles } from "@/assets/styles/home.styles";
import { useTheme } from "@/hooks/useTheme";
import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();
  const homeStyles = createHomeStyles(colors);

  return (
    <View
      style={homeStyles.container}
    >
      <TouchableOpacity
        onPress={toggleDarkMode}
      >
        <Text>Toggle Theme</Text>
      </TouchableOpacity>

      <Link href="/about">About</Link>


    </View>
  );
}

