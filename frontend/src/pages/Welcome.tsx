import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import img from '../assets/img.png';
import arrow from '../assets/arrow.png';

export default function Welcome({ navigation }: any) {

  function handleStart() {
    navigation.navigate('Avatar');
  }

  return (
    <View style={styles.container}>
      <View style={styles.textsContainer}>
        <Text style={styles.title}>Olá, seja Bem-Vindo</Text>
        <Text style={styles.primaryText}>Comece para escolher seu amigo.</Text>
      </View>
      {/* <Image style={styles.img} source={img} /> */}
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>Vamos brincar?</Text>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleStart}
        >
          <Image style={styles.buttonImage} source={arrow} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 16,
    paddingVertical: 60
  },
  textsContainer: {
    alignItems: 'center'
  },
  title: {
    // fontFamily: 'ubik_400Regular',
    fontSize: 32,
    marginBottom: 12
  },
  primaryText: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.5)',
    marginBottom: 24,
  },
  img: {
    marginBottom: 56,
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
    height: 64,
    width: '100%',
    backgroundColor: '#00853B',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonImage: {
    height: 16,
    width: 41
  }
});
