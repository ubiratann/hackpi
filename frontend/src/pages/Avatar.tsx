import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import img from '../assets/img.png';
import arrow from '../assets/arrow.png';

export default function Welcome({ navigation }: any) {

  function handleClickAvatrButton() {

  }

  function handleStart() {
    navigation.navigate('Categories');
  }

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={img} />
      <View style={styles.avatarContainer}>
        <Text style={styles.text}>Escolha seu amigo</Text>
        <View style={styles.avatarButtonContainer}>
          <TouchableOpacity
            style={styles.buttonAvatar}
            activeOpacity={0.7}
            onPress={() => { }}
          >
            <Image style={styles.buttonAvatarImg} source={img} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonAvatar}
            activeOpacity={0.7}
            onPress={() => { }}
          >
            <Image style={styles.buttonAvatarImg} source={img} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonAvatar}
            activeOpacity={0.7}
            onPress={() => { }}
          >
            <Image style={styles.buttonAvatarImg} source={img} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonAvatar}
            activeOpacity={0.7}
            onPress={() => { }}
          >
            <Image style={styles.buttonAvatarImg} source={img} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonAvatar}
            activeOpacity={0.7}
            onPress={() => { }}
          >
            <Image style={styles.buttonAvatarImg} source={img} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonAvatar}
            activeOpacity={0.7}
            onPress={() => { }}
          >
            <Image style={styles.buttonAvatarImg} source={img} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleStart}
      >
        <Text style={styles.text}>Escolher</Text>
      </TouchableOpacity>
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
  img: {
    height: 168,
    width: 168,
    borderRadius: 48,
  },
  avatarContainer: {
    width: '100%',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    marginBottom: 4,
    color: '#fff'
  },
  avatarButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonAvatar: {
    margin: 12
  },
  buttonAvatarImg: {
    height: 64,
    width: 64,
    borderRadius: 16
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
