import { api } from "@/convex/_generated/api";
import { useTheme } from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode } = useTheme();

  const todos = useQuery(api.todos.getTodos);
  console.log(todos);

  const addTodo = useMutation(api.todos.addTodo)



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
      <TouchableOpacity
        onPress={() => addTodo({ text: "i am aman" })}
      >
        <Text>Add a new todo</Text>
      </TouchableOpacity>

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

