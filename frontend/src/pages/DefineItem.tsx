import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import bau_tem from '../assets/baus/bau_tem.png';
import bau_não_tem from '../assets/baus/bau_não_tem.png';
import Item from '../components/Item';

export default function DefineItem() {
  return (
    <View style={styles.container}>
      <Item name='rampa_acesso' />
      <Item name='cadeira_mesa' />
      <View style={styles.trunkContainer}>
        <View style={styles.trunk}>
          <Image style={styles.img} source={bau_não_tem} />
          <Text>Não Tem</Text>
        </View>
        <View style={styles.trunk}>
          <Image style={styles.img} source={bau_tem} />
          <Text>Tem</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  trunkContainer: {
    top: 600,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  trunk: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    height: 114,
    width: 138
  }
});
