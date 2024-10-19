import {View, TextInput} from 'react-native'

import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
  return (
   <View>
    <TextInput></TextInput>
    <PrimaryButton>reset</PrimaryButton>
    <PrimaryButton>confirm</PrimaryButton>
   </View>
  )
}

export default StartGameScreen;