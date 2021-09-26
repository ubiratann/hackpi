import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';

import img from '../assets/img.png';
import arrow from '../assets/arrow.png';

const deviceWidth = Dimensions.get('window').width;

export default function Welcome({ navigation }: any) {


  const [dataCategorie, setDataCategorie] = useState([{
    name: ''
  }]);

  useEffect(() => {

    setDataCategorie([
      { name: 'Materiais Pedagógicos' },
      { name: 'Materiais Pedagógicos' },
      { name: 'Materiais Pedagógicos' },
      { name: 'Materiais Pedagógicos' },
      { name: 'Materiais Pedagógicos' },
      { name: 'Materiais Pedagógicos' },
    ]);

  }, []);

  function handleStart() {
    navigation.navigate('DefineItem');
  }

  return (
    <View style={styles.container}>
      <View style={styles.textsContainer}>
        <Text style={styles.textBalloon}>{`olá, me chamo ${'Caio'}, tudo bem? Escolha uma fase para me ajudar a organizar o que tem na sua escola.`}</Text>
      </View>
      <Image style={styles.img} source={img} />

      <FlatList
        data={dataCategorie}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            activeOpacity={0.7}
            onPress={handleStart}
          >
            <Image style={styles.buttonImage} source={require(`../assets/${'img'}.png`)} />
            <Text style={styles.textButton}>{item.name}</Text>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    paddingHorizontal: 16,
    paddingTop: 60
  },
  textsContainer: {
    padding: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 16,
    marginLeft: 54,
    marginBottom: 12
  },
  textBalloon: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.5)',
    marginBottom: 8,
  },
  primaryText: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.5)',
    marginBottom: 24,
  },
  img: {
    height: 116,
    width: 116,
    borderRadius: 24,
    marginBottom: 36,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.5)',
    marginBottom: 16,
  },
  button: {
    height: 88,
    width: '100%',
    backgroundColor: '#00853B',
    borderRadius: 22,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24
  },
  buttonImage: {
    height: 64,
    width: 64,
    marginHorizontal: 12,
    borderRadius: 16
  },
  textButton: {
    fontSize: 16,
    color: '#fff',
  },
  list: {
    width: deviceWidth - 32,
  }
});
