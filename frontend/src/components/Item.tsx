import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import Animated, {
  runOnJS, useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'react-native-reanimated';

type itemResponseTypes = {
  id: number,
  value: boolean
}

type itemTypes = {
  id: number,
  nome: string,
  img: string,
}

type itemProp = {
  item: itemTypes,
  numberItens: number,
  response: (value: itemResponseTypes) => void
  click: () => void
}

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default function App({ item, numberItens, response, click }: itemProp) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const posX = useSharedValue(0);
  const posY = useSharedValue(0);
  const scaleAnimation = useSharedValue(false);

  function handleItemInTrunk(value: boolean) {
    response({ id: item.id, value: value });
  }

  const onGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, { posX: number, posY: number, scale: number }>({
    onStart(_, ctx) {
      ctx.posX = posX.value;
      ctx.posY = posY.value;
    },
    onActive(event, ctx) {
      posX.value = ctx.posX + event.translationX;
      posY.value = ctx.posY + event.translationY;
    },
    onEnd() {
      if (posX.value > (deviceWidth / 3) - x && posY.value > (deviceHeight - 300) - y) {
        posX.value = withSpring((deviceWidth - 172) - x);
        posY.value = withSpring((deviceHeight - 169) - y);
        scaleAnimation.value = true;
        runOnJS(handleItemInTrunk)(false);
      }
      else if (posX.value < (deviceWidth / 3) - x && posY.value > (deviceHeight - 300) - y) {
        posX.value = withSpring(12 - x);
        posY.value = withSpring((deviceHeight - 169) - y);
        scaleAnimation.value = true;
        runOnJS(handleItemInTrunk)(true);
      }
      else {
        posX.value = withSpring(0);
        posY.value = withSpring(0);
        scaleAnimation.value = false;
      }
    }
  });

  const animationStyleItem = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: posX.value },
        { translateY: posY.value },
        { scale: withSpring(scaleAnimation.value ? 0.5 : 1) }
      ],
    }
  });

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View
        style={[styles.item, animationStyleItem]}
        onLayout={event => {
          setX(event.nativeEvent.layout.x);
          setY(event.nativeEvent.layout.y);
        }}

      >
        <TouchableOpacity onPress={click}>
          {
            <Image
              key={item.id}
              style={
                [numberItens < 3 ?
                  [{ width: (deviceWidth / 2) - 32, height: (deviceWidth / 2) - 32 }]
                  :
                  [{ width: (deviceWidth / 3) - 28, height: (deviceWidth / 3) - 28 }],
                [styles.Imageitem]]
              }
              source={{ uri: item.img }} />
          }
        </TouchableOpacity>
      </Animated.View>
    </PanGestureHandler>
  );
}

const styles = StyleSheet.create({
  item: {
    borderRadius: 16,
    marginVertical: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#EBB685',
    // zIndex: 1
  },
  Imageitem: {
    borderRadius: 16,
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    height: 40,
    width: (deviceWidth / 3) - 30,
    marginVertical: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textItem: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000000'
  }
});