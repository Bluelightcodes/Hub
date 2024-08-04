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

function LoginScreen({navigation}) {

  const signUp = async () => {
    navigation.navigate('CreateAccount');
  };

  return (
    <View >
      <Button
        title="LoginScreen"
        onPress={signUp}
        color="black"
 
      />
    </View>
  );
};

export default LoginScreen;
