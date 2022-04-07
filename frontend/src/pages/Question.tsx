import {
  BottomSheetModal, BottomSheetModalProvider, BottomSheetView
} from '@gorhom/bottom-sheet';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useRef, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import bau_não_tem from '../assets/baus/bau_não_tem.png';
import bau_tem from '../assets/baus/bau_tem.png';
import Item from '../components/Item';
import ItemModal from '../components/ItemModal';
import SpeechBubble from '../components/SpeechBubble';
import { Data } from '../utils/data';

type RootStackParamList = {
  question: {
    idPhase: number,
    student: studentTypes
  },
  home: undefined
};

type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'home'>;
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'question'>;

type Props = {
  navigation: ProfileScreenNavigationProp,
  route: ProfileScreenRouteProp
}

type studentTypes = {
  name: string,
  idade: number,
  sexo: string,
  sala: string,
}

type itemResponseTypes = {
  item: itemTypes,
  value: boolean
};

type questionTypes = {
  id: number,
  texto: string,
  id_fase: number,
  id_dimensao: number,
  tipo: number
  item: itemTypes[]
}

type itemTypes = {
  id: number,
  nome: string,
  img: string,
  descricao: string,
  tipo: number
};

export default function Question({ navigation, route }: Props) {
  const [arrayResponse, setArrayResponse] = useState<(itemResponseTypes | undefined)[]>([]);
  const [question, setQuestion] = useState<questionTypes>();
  const [item, setItem] = useState<itemTypes>();
  const [questionNumber, setQuestionNumber] = useState(0);
  const [numberItemNotSelected, setNumberItemNotSelected] = useState(1);
  const [student, setStudent] = useState<studentTypes>();

  const bottomSheetModalStartRef = useRef<BottomSheetModal>(null);
  const bottomSheetModalItemRef = useRef<BottomSheetModal>(null);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  useEffect(() => {
    console.log(`id da fase: ${route.params.idPhase}`);
    setStudent(route.params.student);
    setQuestion(Data.pergunta[questionNumber]);
    setNumberItemNotSelected(Data.pergunta[questionNumber].item.length);
    setArrayResponse([]);
    setTimeout(() => {
      bottomSheetModalStartRef.current?.present();
    }, 500);
  }, [, questionNumber]);

  useEffect(() => {
    if (numberItemNotSelected < 1) {
      bottomSheetModalRef.current?.present();
    }
  }, [numberItemNotSelected]);

  function handleButtonModalStartClick() {
    bottomSheetModalStartRef.current?.close();
  }

  function handleItemClick(item: itemTypes) {
    setItem(item);
    bottomSheetModalItemRef.current?.present()
  }


  function handleButtonModalClick(nextQuestion: boolean) {

    if (question?.tipo === 1) {
      const item = arrayResponse.find(item => (
        item?.value === true
      ));
      console.log({
        aluno: student,
        id_pergunta: question?.id,
        value: item?.item.tipo
      });
    }
    else if (question?.tipo === 2) {
      const items = arrayResponse.filter(item => (
        item?.value === true
      ));
      console.log({
        aluno: student,
        id_pergunta: question?.id,
        value: items.length === 0 ? 1 : items.length === 1 ? 2 : 3
      });
    }

    if (nextQuestion) {
      setQuestionNumber(questionNumber + 1);
      bottomSheetModalRef.current?.close();
    }
    else {
      navigation.navigate('home');
    }
  }

  function handleItemInTrunk(item: itemResponseTypes) {
    setArrayResponse([...arrayResponse, item]);
    setNumberItemNotSelected(numberItemNotSelected - 1);
  }

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        {
          question?.item.map(item => (
            <Item key={item.id} item={item} numberItens={question?.item.length} response={handleItemInTrunk} click={() => handleItemClick(item)} />
          ))
        }
      </View>
      <View style={styles.trunkContainer}>
        <Image style={styles.img} source={bau_tem} />
        <Image style={styles.img} source={bau_não_tem} />
      </View>


      <ItemModal item={item} reference={bottomSheetModalItemRef} />


      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetModalStartRef}
          snapPoints={['65%']}
          backdropComponent={() => <View style={styles.background} />}
          handleStyle={{ backgroundColor: '#F2F2F2', borderRadius: 16 }}
          enablePanDownToClose={true}
        >
          <BottomSheetView style={styles.contentContainer}>
            <SpeechBubble
              title='Vamos Brincar ?'
              text={question?.texto}
            />
            <TouchableOpacity style={styles.button} onPress={handleButtonModalStartClick}>
              <Text style={styles.textButton}>COMEÇAR</Text>
            </TouchableOpacity>
          </BottomSheetView>
        </BottomSheetModal>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          snapPoints={['55%']}
          backdropComponent={() => <View style={styles.background} />}
          handleStyle={{ backgroundColor: '#F2F2F2', borderRadius: 16 }}
          enablePanDownToClose={true}
        >
          <BottomSheetView style={styles.contentContainer}>
            {
              numberItemNotSelected < 1 && questionNumber < Data.pergunta.length - 1 ?
                <>
                  <SpeechBubble
                    title={`parabéns ${student?.name} !`}
                    text='VAMoS PARA A PRÓXIMA PERGUNTA.'
                  />
                  <TouchableOpacity style={styles.button} onPress={() => handleButtonModalClick(true)}>
                    <Text style={styles.textButton}>PRÓXIMA PERGUNTA</Text>
                  </TouchableOpacity>
                </>
                :
                questionNumber === Data.pergunta.length - 1 &&
                <>
                  <SpeechBubble
                    title={`parabéns ${student?.name} !`}
                    text='você terminou essa fase, vamos para a próxima.'
                  />
                  <TouchableOpacity style={styles.button} onPress={() => handleButtonModalClick(false)}>
                    <Text style={styles.textButton}>próxima fase</Text>
                  </TouchableOpacity>
                </>
            }
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    justifyContent: 'space-between',
    padding: 24
  },
  list: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 24,
    justifyContent: 'space-between',
  },
  trunkContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    height: 114,
    width: 138
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F2F2F2',
    padding: 24,
  },
  button: {
    width: '100%',
    paddingVertical: 24,
    backgroundColor: '#EBB685',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    marginBottom: 24
  },
  textButton: {
    fontFamily: 'Sniglet_400Regular',
    fontSize: 20,
    color: '#555555',
    lineHeight: 24.5,
    letterSpacing: 0.5
  }
});
