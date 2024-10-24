import { useState } from "react";
import { View, TextInput, StyleSheet, Alert, Text } from "react-native";  // Make sure Text is imported
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen({onPick}) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function handleEnteredText(DNumber) {
    setEnteredNumber(DNumber);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return; // Exit early if the number is invalid
    }

    onPick(chosenNumber); // Only call onPick if the number is valid
    console.log("Valid number!");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={handleEnteredText}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>
            <Text>Reset</Text>  {/* Wrapped text in Text component */}
          </PrimaryButton>
        </View>

        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>
            <Text>Confirm</Text>  {/* Wrapped text in Text component */}
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#4e0329",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 8,
  },
});

export default StartGameScreen;
