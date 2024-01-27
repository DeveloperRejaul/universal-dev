import { DrawerContentScrollView } from '@react-navigation/drawer';
import React from 'react';
import { CustomDrawerProps } from './types';
import CloseIcon from 'src/assets/icon/CloseIcon';
import { useToken } from '@hooks/useToken';
import { View } from 'react-native';
import { rf } from 'src/constants/dimensions';
import { Avatar } from '@components';
import { Text } from 'react-native';
import ArrowRightIcon from 'src/assets/icon/ArrowRightIcon';
import CropIcon from 'src/assets/icon/CropIcon';
import LogoutIcon from 'src/assets/icon/LogoutIcon';
import PrivacyIcon from 'src/assets/icon/PrivacyIcon';
import SupportIcon from 'src/assets/icon/SupportIcon';
import LanguageIcon from 'src/assets/icon/LanguageIcon';
import ProduceIcon from 'src/assets/icon/ProduceIcon';
import FaqIcon from 'src/assets/icon/FaqIcon';
import OderIcon from 'src/assets/icon/OderIcon';
import CommunityIcon from 'src/assets/icon/CommunityIcon';

const ICON_COLOR = useToken('colors', 'primary');
const textClass = 'text-headline font-manropeMedium ml-5 text-xl';
const bodyClass = 'flex-row items-center py-2 px-3 my-3';

export default function CustomDrawer (props: CustomDrawerProps) {
  const {navigation} = props;

  return (
    <View className='flex-1'>
      <View className='px-4 gap-y-5'>
        <CloseIcon color={ICON_COLOR} size={rf(3)} onPress={()=>navigation.closeDrawer()} />
        {/* Profile part  */}
        <View className='flex-row justify-between items-center py-2 px-3 border border-border rounded-xl'>
          <View className='flex-row items-center'>
            <Avatar uri='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' />
            <View className='ml-2'>
              <Text className='text-headline text-lg font-manropeBold'>Karna</Text>
              <Text className='text-paragraph text-sm font-manropeRegular' >+91 98765 43210</Text>
            </View>
          </View>
          <ArrowRightIcon className='fill-primary' />
        </View>
      </View>

      {/* scroll items */}
      <DrawerContentScrollView {...props}>
        <View className='px-4 -mt-10' >
          {/* Crop Schedule */}
          <View className={bodyClass}>
            <CropIcon className='fill-primary' size={rf(3.2)} /> 
            <Text className={textClass}>Crop Schedule</Text> 
          </View>

          {/* Community */}
          <View className={bodyClass}>
            <CommunityIcon className='fill-primary' size={rf(3.2)} /> 
            <Text className={textClass}>Community</Text> 
          </View>

          {/*My Orders */}
          <View className={bodyClass}>
            <OderIcon className='fill-primary' size={rf(3.2)} /> 
            <Text className={textClass}>My Orders</Text> 
          </View>

          {/*FAQ */}
          <View className={bodyClass}>
            <FaqIcon className='fill-primary' size={rf(3.2)} /> 
            <Text className={textClass}>FAQ</Text> 
          </View>

          {/* Produce */}
          <View className={bodyClass}>
            <ProduceIcon className='fill-primary' size={rf(3.2)} /> 
            <Text className={textClass}>Produce</Text> 
          </View>

          {/* Language */}
          <View className={bodyClass}>
            <LanguageIcon className='fill-primary' size={rf(3.2)} /> 
            <Text className={textClass}>Language</Text> 
          </View>

          {/* Support */}
          <View className={bodyClass}>
            <SupportIcon className='fill-primary' size={rf(3.2)} /> 
            <Text className={textClass}>Support</Text> 
          </View>

          {/* Terms & Conditions */}
          <View className={bodyClass}>
            <PrivacyIcon className='fill-primary' size={rf(3.2)} /> 
            <Text className={textClass}>Terms & Conditions</Text> 
          </View>

          {/* Privacy Policy */}
          <View className={bodyClass}>
            <PrivacyIcon className='fill-primary' size={rf(3.2)} /> 
            <Text className={textClass}>Privacy Policy</Text> 
          </View>

          {/* Log Out */}
          <View className={bodyClass}>
            <LogoutIcon className='fill-primary' size={rf(3.2)} /> 
            <Text className={textClass}>Log Out</Text> 
          </View>

        </View>
      </DrawerContentScrollView>

      {/* Footer */}
      <Text className='text-paragraph px-6 py-4 text-lg'>Version 1.0.0  </Text>
    </View>
  );
}



