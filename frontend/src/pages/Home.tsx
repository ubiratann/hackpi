import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SpeechBubble from '../components/SpeechBubble';
import { Data } from '../utils/data';

type RootStackParamList = {
  question: {
    idPhase: number,
    student?: studentTypes
  },
  login: {
    student: studentTypes
  }
};

type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'question'>;
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'login'>;

type Props = {
  navigation: ProfileScreenNavigationProp,
  route: ProfileScreenRouteProp
}

type phaseType = {
  id: number,
  nome: string
}

type studentTypes = {
  name: string,
  idade: number,
  sexo: string,
  sala: string,
}

const deviceWidth = Dimensions.get('window').width;

export default function Home({ navigation, route }: Props) {
  const [phase, setPhase] = useState<phaseType[]>([]);
  const [student, setStudent] = useState<studentTypes>();

  useEffect(() => {
    setStudent(route.params.student);
    setPhase(Data.fase);
  }, []);

  function handleClick(id: number) {
    navigation.navigate('question', { idPhase: id, student });
  }

  return (
    <View style={styles.container}>
      <SpeechBubble
        title={`olá ${student?.name}.`}
        text='ME CHAMO ARAÊ, VAMOS BRINCAR ? TERMINE UMA FASE PARA LIBERAR OUTRA.'
      />
      <View style={styles.containerButton}>
        {
          phase.map(phase => (
            <TouchableOpacity key={phase.id} style={styles.button} onPress={() => handleClick(phase.id)}>
              <Text style={styles.textButton}>{phase.nome}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEDEDE',
    paddingBottom: 24,
    paddingHorizontal: 24,
    paddingTop: 62,
    justifyContent: 'space-between'
  },
  containerButton: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  button: {
    width: (deviceWidth / 2) - 32,
    height: (deviceWidth / 2) - 32,
    paddingVertical: 24,
    backgroundColor: '#EBB685',
    borderRadius: 16,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    fontFamily: 'Sniglet_400Regular',
    fontSize: 20,
    color: '#555555',
    lineHeight: 24.5,
    letterSpacing: 0.5
  }
});
