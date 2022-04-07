import {
  BottomSheetModal, BottomSheetModalProvider, BottomSheetView
} from '@gorhom/bottom-sheet';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SpeechBubble from '../components/SpeechBubble';

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
          <SpeechBubble
            title={item?.nome}
            text={item?.descricao}
          />
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
