import * as Speech from 'expo-speech';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  title?: string,
  text?: string
}

const deviceWidth = Dimensions.get('window').width;

export default function SpeechBubble({ title, text }: Props) {
  function handleContainerTextClick() {
    title && Speech.speak(title, { language: "pt-BR", rate: 0.9 });
    text && Speech.speak(text, { language: "pt-BR", rate: 0.9 });
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleContainerTextClick}>
      <View style={styles.containerText}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
        <Image style={styles.character} source={{}} />
        <Image style={styles.icon} source={{}} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%'
  },
  containerText: {
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
  }
});
