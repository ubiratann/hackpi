import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

type RootStackParamList = {
  home: {
    student?: studentTypes
  }
};

type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'home'>;

type Props = {
  navigation: ProfileScreenNavigationProp,
}

type studentTypes = {
  name: string,
  idade: number,
  sexo: string,
  sala: string,
}

export default function Login({ navigation }: Props) {

  const [student, setStudent] = useState<studentTypes>();

  useEffect(() => {
    setStudent({
      name: 'Joáo',
      idade: 5,
      sexo: 'M',
      sala: 'infantil 5 - A',
    });
  }, []);

  function handleStart() {
    navigation.navigate('home', { student });
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior='position'>
        <TextInput style={styles.input} placeholder='NOME' autoCapitalize='none' />
        <TextInput style={styles.input} placeholder='IDADE' />
        <TextInput style={styles.input} placeholder='SEXO' />
        <TextInput style={styles.input} placeholder='TURMA/SALA' />
      </KeyboardAvoidingView>
      <TouchableOpacity
        style={styles.button}
        onPress={handleStart}
      >
        <Text style={styles.textButton}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEDEDE',
    paddingBottom: 24,
    paddingHorizontal: 24,
    paddingTop: 62
  },
  input: {
    width: '100%',
    fontSize: 20,
    padding: 24,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
    textTransform: 'uppercase'
  },
  button: {
    width: '100%',
    backgroundColor: '#EBB685',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 24,
    marginTop: 28,
  },
  textButton: {
    fontFamily: 'Sniglet_400Regular',
    fontSize: 20,
    color: '#555555',
    lineHeight: 24.5,
    letterSpacing: 0.5
  }
});
