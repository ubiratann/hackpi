import React from 'react';
import { StyleSheet, Text, Dimensions, Image } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

type itemProp = {
  name: string,
}

import rampa_acesso from '../assets/infraestrutura/rampa_acesso.png';
import cadeira_mesa from '../assets/infraestrutura/cadeira_mesa.png';

export default function App(prop: itemProp) {

  const deviceWidth = Dimensions.get('window').width;

  const posX = useSharedValue((deviceWidth / 2) - 48);
  const posY = useSharedValue(300);

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, ctx: any) {
      ctx.posX = posX.value;
      ctx.posY = posY.value;
    },
    onActive(event, ctx: any) {
      posX.value = ctx.posX + event.translationX;
      posY.value = ctx.posY + event.translationY;
    },
    onEnd() {
      if (posX.value >= deviceWidth / 2 && posY.value >= 500) {
        posX.value = withSpring(deviceWidth - 140);
        posY.value = withSpring(580);
      }
      else
        if (posX.value <= deviceWidth / 2 && posY.value >= 500) {
          posX.value = withSpring(40);
          posY.value = withSpring(580);
        }
        else {
          posX.value = withSpring((deviceWidth / 2) - 48);
          posY.value = withSpring(300);
        }
    }
  });

  const positionStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: posX.value },
        { translateY: posY.value }
      ]
    }
  });

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View style={[styles.item, positionStyle]}>
        {
          prop.name === 'rampa_acesso' ?
            <Image style={styles.Imageitem} source={require(`../assets/infraestrutura/rampa_acesso.png`)} />
            :
            prop.name === 'cadeira_mesa' &&
            <Image style={styles.Imageitem} source={require(`../assets/infraestrutura/cadeira_mesa.png`)} />
        }
      </Animated.View>
    </PanGestureHandler>
  );
}

const styles = StyleSheet.create({
  item: {
    position: 'absolute',
    // width: 96,
    // height: 96,
    // borderRadius: 24,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  Imageitem: {
    width: 96,
    height: 96,
    borderRadius: 24,
  },
  textItem: {
    color: '#fff'
  }
});