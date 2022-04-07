import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
      <View style={styles.containerText}>
        <Text style={styles.title}>{`olá ${student?.name}.`}</Text>
        <Text style={styles.text}>ME CHAMO ARAÊ, VAMOS BRINCAR ? TERMINE UMA FASE PARA LIBERAR OUTRA.</Text>
        <Image style={styles.character} source={{}} />
        <Image style={styles.icon} source={{}} />
      </View>
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
  containerText: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 93,
    borderRadius: 16
  },
  title: {
    fontFamily: 'Sniglet_400Regular',
    fontSize: 24,
    color: '#555555',
    lineHeight: 30,
    letterSpacing: 0.5,
    marginBottom: 16,
    textTransform: 'uppercase'
  },
  text: {
    fontFamily: 'Sniglet_400Regular',
    fontSize: 20,
    color: '#999999',
    lineHeight: 24.5,
    letterSpacing: 0.5,
    textTransform: 'uppercase'
  },
  icon: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    height: 24,
    width: 24,
    backgroundColor: '#999999',
  },
  character: {
    position: 'absolute',
    bottom: -61,
    backgroundColor: '#EBB685',
    height: 130,
    width: 130,
    borderRadius: 65
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
