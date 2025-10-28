import { createHomeStyles } from "@/assets/styles/home.styles";
import { useTheme } from "@/hooks/useTheme";
import { Link } from "expo-router";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();
  const homeStyles = createHomeStyles(colors);

  return (
    <SafeAreaView
      style={homeStyles.safeArea}
    >
      <TouchableOpacity
        onPress={toggleDarkMode}
      >
        <Text>Toggle Theme</Text>
      </TouchableOpacity>
      <Link href="/about">About</Link>
    </SafeAreaView>
  );
}

