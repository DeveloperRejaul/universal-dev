import React, { useEffect } from 'react';
import {DrawerContentScrollView,DrawerItemList,DrawerContentComponentProps} from '@react-navigation/drawer';
import Icon from '@expo/vector-icons/Ionicons';
import Animated, {useAnimatedStyle,useSharedValue,withTiming} from 'react-native-reanimated';
import DrawerItems from './DrawerItems';
import { ITEM_HEIGHT } from './constance';
import { Text, View ,Pressable, StyleSheet} from 'react-native';
import { useToken } from '@hooks/useToken';

// creating animated components 
const AnimatedText = Animated.createAnimatedComponent(Text);
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const AnimatedBox = Animated.createAnimatedComponent(View);
const ANIMATED_BOX_HEIGHT = ITEM_HEIGHT * 7;

// get colors 
const borderColor = useToken('colors', "coolGray400");
const hoverColor = useToken('colors', "amber400");
const textColor = useToken('colors', "coolGray500");
const iconActiveColor =useToken("colors", "white")

const CustomDrawer: React.FC<DrawerContentComponentProps> = (props) => {

  const [isHoverWinter, setIsHoverWinter] = React.useState(false);
  const [isWinterBtnClick, setIsWinterBtnClick] = React.useState(false);
  const btnClick = useSharedValue(false);
  const hover = useSharedValue('#848484');

  // create hover animation
  useEffect(() => {
    if (isHoverWinter) hover.value = withTiming(hoverColor, { duration: 500 });
    if (!isHoverWinter) hover.value = withTiming(textColor, { duration: 500 });
  }, [isHoverWinter]);
  const animatedStyle = useAnimatedStyle(() => ({ color: hover.value }));

  // handle button click
  useEffect(() => {
    if (isWinterBtnClick) btnClick.value = true;
    if (!isWinterBtnClick) btnClick.value = false;
  }, [isWinterBtnClick]);

  const btnAnimationStyle = useAnimatedStyle(() => ({
    backgroundColor: btnClick.value? withTiming(hoverColor, { duration: 300 }): withTiming(iconActiveColor, { duration: 300 }),
  }));

  const iconAnimationStyle = useAnimatedStyle(() => ({
    transform: [{rotate: btnClick.value? withTiming('90deg', { duration: 300 }): withTiming('0deg', { duration: 300 })}],
    color: btnClick.value? withTiming(iconActiveColor, { duration: 300 }) : withTiming(textColor, { duration: 300 }),
  }));

  // items style animation
  const itemsAnimatedStyle = useAnimatedStyle(() => {
    return {
      height: btnClick.value ? withTiming(ANIMATED_BOX_HEIGHT, { duration: 300 }): withTiming(0, { duration: 300 }),
    };
  });

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />

      <View>
        <Pressable
          onHoverIn={() => setIsHoverWinter(true)}
          onHoverOut={() => setIsHoverWinter(false)}
          className='flex-row justify-between items-center border-y-2 border-coolGray400 '
          >
          <AnimatedText style={[animatedStyle,styles.item]}>
            Winter Collection
          </AnimatedText>

          <AnimatedPressable
            style={[btnAnimationStyle, styles.btn, styles.item]}
            onPress={() => setIsWinterBtnClick((pre) => !pre)}
            >
            <AnimatedText style={iconAnimationStyle}>
              <Icon name='chevron-forward' size={20} />
            </AnimatedText>
          </AnimatedPressable>
        </Pressable>
        <AnimatedBox style={[itemsAnimatedStyle, { overflow: 'hidden' }]}>
          <DrawerItems />
          <DrawerItems />
          <DrawerItems />
          <DrawerItems />
          <DrawerItems />
          <DrawerItems />
          <DrawerItems />
        </AnimatedBox>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;



const styles = StyleSheet.create({
  btn:{borderLeftWidth:2, borderColor},
  item:{paddingHorizontal:10, paddingVertical:10}
})