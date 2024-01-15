import React, { useContext, useEffect } from 'react';
import { SIDEBAR_ICON_SIZE, SIDEBAR_WIDTH } from '../../constants/constants';
import Animated, { useSharedValue, withTiming } from 'react-native-reanimated';
import Icon from '@expo/vector-icons/AntDesign';
import { ScrollView, View , StyleSheet, useWindowDimensions, Text} from 'react-native';
import { useMedia } from '@hooks/useMedia';
import { useToken } from '@hooks/useToken';
import { DrawerContext } from 'src/features/dashboard/screens/Index';

const color = useToken('colors', 'black');
const AnimatedView = Animated.createAnimatedComponent(View);


export default function Sidebar() {
  const {height} = useWindowDimensions();
  const {isOpen,toggle} = useContext(DrawerContext);
  const {md} = useMedia();
  const translateX = useSharedValue(md ? 0 : -SIDEBAR_WIDTH);

  useEffect(() => {
    if (isOpen) translateX.value = withTiming(0, { duration: 300 });
    if (!isOpen) translateX.value = withTiming(-SIDEBAR_WIDTH, { duration: 300 });
    if (md) translateX.value = 0;
  }, [isOpen, md]);
  

  return (
    <AnimatedView style={[{transform: [{ translateX }], zIndex:999,}]} >
      <View className={ md ? 'static shadow':'absolute' } style={[styles.container,{height}]}>
        <ScrollView>
          <View >

            {/* Sidebar  top  section */}
            <View className='flex-row w-[100%]'>
              <View className ='w-[90%] h-12 justify-center'>
                <Text > Logo </Text>
              </View>
              {md || <View className='w-[10%] h-12  justify-center items-center' >
                <Icon name='menuunfold' onPress={() => toggle(p=>!p)} size={SIDEBAR_ICON_SIZE-10} color={color} />
              </View>}
            </View>
            {/* button for sidebar open and close  */}

          </View>
        </ScrollView>
      </View>
    </AnimatedView>
  );
}


const styles = StyleSheet.create({
  container :{
    width:SIDEBAR_WIDTH,
    backgroundColor:'#fff',
  },
});