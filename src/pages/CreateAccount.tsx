import React, { useState, useRef, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native'; 

function CreateAccount({navigation}) : React.JSX.Element {

  const signUp = async () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <View >
      <Button
        title="CreateAccount"
        onPress={signUp}
        color="black"
      />
    </View>
  );
};

export default CreateAccount;
