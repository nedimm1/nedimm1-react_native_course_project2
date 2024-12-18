import { View, Text, StyleSheet, Pressable } from "react-native";

function PrimaryButton({ children, onPress }) {

  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={onPress}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#8c0046",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

export default PrimaryButton;
