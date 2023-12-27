import React, { useEffect } from 'react';
import { SIDEBAR_WIDTH } from '../../dashboard/constants/constants';
import Animated, { useSharedValue, withTiming } from 'react-native-reanimated';
import { useAppSelector } from '@hooks/useAppSelector';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { drawerToggle } from '../slice/slice';
import Icon from '@expo/vector-icons/AntDesign';
import { ScrollView, View , Pressable, StyleSheet} from 'react-native';
import { useMedia } from '@hooks/useMedia';
import { height, rf } from 'src/constants/dimensions';
import { useToken } from '@hooks/useToken';
const color =  useToken("colors", "white")

const AnimatedView = Animated.createAnimatedComponent(View)

export default function Sidebar() {
  const { isOpen } = useAppSelector((state) => state.drawer);
  const dispatch = useAppDispatch();
  const {base, md} = useMedia();
  const translateX = useSharedValue(md ? 0 : -SIDEBAR_WIDTH);

  useEffect(() => {
    if (isOpen) translateX.value = withTiming(0, { duration: 300 });
    if (!isOpen) translateX.value = withTiming(-SIDEBAR_WIDTH, { duration: 300 });
    if (md) translateX.value = 0;
  }, [isOpen, md]);
  

  return (
      <AnimatedView  style={[{transform: [{ translateX }], zIndex:999}]} >
        <View className={ md ? "static":"absolute" } style={styles.container}>
        <ScrollView>
          <View style={styles.scrollBody}>
            <Pressable
              style={styles.btn}
              onPress={() => dispatch(drawerToggle())}>
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
    height,
    backgroundColor:"#fff",
  },
  scrollBody:{flex:1, alignItems:"center", backgroundColor:"red"},
  btn:{alignSelf:"flex-end", padding:10},
})