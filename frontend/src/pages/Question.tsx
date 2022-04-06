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
  id: number,
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
  valor: number
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

  function handleButtonModalClick(nextItem: boolean) {
    console.log({
      nome_aluno: student?.name,
      id_pergunta: question?.id,
      text: question?.texto,
      resposta: arrayResponse
    });
    if (nextItem) {
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
            <View style={styles.containerText}>
              <Text style={styles.title}>vamos brincar ?</Text>
              <Text style={styles.text}>{question?.texto}</Text>
              <Image style={styles.character} source={{}} />
              <Image style={styles.icon} source={{}} />
            </View>
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
                  <View style={styles.containerText}>
                    <Text style={styles.title}>parabéns {student?.name} !</Text>
                    <Text style={styles.text}>VAMoS PARA A PRÓXIMA PERGUNTA.</Text>
                    <Image style={styles.character} source={{}} />
                    <Image style={styles.icon} source={{}} />
                  </View>
                  <TouchableOpacity style={styles.button} onPress={() => handleButtonModalClick(true)}>
                    <Text style={styles.textButton}>PRÓXIMA PERGUNTA</Text>
                  </TouchableOpacity>
                </>
                :
                questionNumber === Data.pergunta.length - 1 &&
                <>
                  <View style={styles.containerText}>
                    <Text style={styles.title}>parabéns {student?.name} !</Text>
                    <Text style={styles.text}>você terminou essa fase, vamos para a próxima.</Text>
                    <Image style={styles.character} source={{}} />
                    <Image style={styles.icon} source={{}} />
                  </View>
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
  containerText: {
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 93,
    borderRadius: 16,
    marginBottom: 61
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
