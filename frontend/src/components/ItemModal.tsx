import {
  BottomSheetModal, BottomSheetModalProvider, BottomSheetView
} from '@gorhom/bottom-sheet';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  item?: {
    nome: string,
    img: string,
    descricao: string,
  }
  reference: React.RefObject<BottomSheetModalMethods>
}

export default function ItemModal({ item, reference }: Props) {

  function handleButtonModalStartClick() {
    reference.current?.close();
  }

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={reference}
        snapPoints={['95%']}
        backdropComponent={() => <View style={styles.background} />}
        handleStyle={{ backgroundColor: '#F2F2F2', borderRadius: 16 }}
        enablePanDownToClose={true}
      >
        <BottomSheetView style={styles.contentContainer}>
          <View style={styles.containerText}>
            <Text style={styles.title}>{item?.nome}</Text>
            <Text style={styles.text}>{item?.descricao}</Text>
            <Image style={styles.character} source={{}} />
            <Image style={styles.icon} source={{}} />
          </View>
          <Image style={styles.img} source={{ uri: item?.img }} />
          <TouchableOpacity style={styles.button} onPress={handleButtonModalStartClick}>
            <Text style={styles.textButton}>CONTINUAR</Text>
          </TouchableOpacity>
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F2F2F2',
    padding: 24,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
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
  img: {
    height: 250,
    width: 250
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
