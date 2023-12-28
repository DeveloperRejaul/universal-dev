import React, { useContext, useEffect } from 'react';
import { SIDEBAR_WIDTH } from '../../dashboard/constants/constants';
import Animated, { useSharedValue, withTiming } from 'react-native-reanimated';
import Icon from '@expo/vector-icons/AntDesign';
import { ScrollView, View , Pressable, StyleSheet, useWindowDimensions} from 'react-native';
import { useMedia } from '@hooks/useMedia';
import { useToken } from '@hooks/useToken';
import { DrawerContext } from 'src/features/dashboard/screens/Index';

const color =  useToken("colors", "white")

const AnimatedView = Animated.createAnimatedComponent(View)


export default function Sidebar() {
 const {height} = useWindowDimensions()
  const {isOpen,toggle} = useContext(DrawerContext)
  const {md} = useMedia();
  const translateX = useSharedValue(md ? 0 : -SIDEBAR_WIDTH);

  useEffect(() => {
    if (isOpen) translateX.value = withTiming(0, { duration: 300 });
    if (!isOpen) translateX.value = withTiming(-SIDEBAR_WIDTH, { duration: 300 });
    if (md) translateX.value = 0;
  }, [isOpen, md]);
  

  return (
      <AnimatedView  style={[{transform: [{ translateX }], zIndex:999}]} >
        <View className={ md ? "static":"absolute" } style={[styles.container,{height}]}>
        <ScrollView>
          <View style={styles.scrollBody}>
            <Pressable
              style={styles.btn}
              onPress={() => toggle(p=>!p)}>
              <Icon name='menuunfold' size={20} color={color} />
            </Pressable>
          </View>
        </ScrollView>
        </View>
    </AnimatedView>
  );
}


const styles = StyleSheet.create({
  container :{
    width:SIDEBAR_WIDTH,
    backgroundColor:"#fff",
  },
  scrollBody:{flex:1, alignItems:"center", backgroundColor:"red"},
  btn:{alignSelf:"flex-end", padding:10},
})