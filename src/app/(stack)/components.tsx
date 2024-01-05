
import { View, Text,ScrollView} from 'react-native';
import React, { useState } from 'react';
import * as Component from '@components';
import * as PComponent from '@platform-components';
import {useToast} from '@hooks/useToast';
import { useFrom } from 'src/components/form';
import { string, object } from 'yup';


const schema = object({
  name:string().min(10, 'Must be at least 10 characters long'),
  email:string().min(10, 'Must be at least 10 characters long').email('Must be a valid email')
});


export default function Components() {

  const {show} = useToast();
  const {Controller, handleSubmit, errors} = useFrom({initialState:{name:'', email:''},schema});
  const onSubmit = async (value)=>{ console.log( value); };
  

  return (<ScrollView>
    <View style={{zIndex:-1}} className='px-2 space-y-6 pb-36'>

      <View style={{rowGap:5}}>
        <Component.H3 className='text-center'> Hook From  components </Component.H3> 
        <Controller
          name='name'
          render={({onChange})=><PComponent.Input placeholder='Name' onChangeText={onChange} error={errors.name && errors.name } />}
        />
        <Controller
          name='email'
          render={({onChange})=><PComponent.Input placeholder='Email' onChangeText={onChange} error={errors.email && errors.email } />}
        />
        <Text onPress={()=>onSubmit(handleSubmit())}>Click Me</Text>
      </View>

      <View style={{rowGap:5}}>
        {/* Radio components */}
        <Component.H3 className='text-center'> Radio components </Component.H3> 
        <Component.Radio.RadioGroup initialSelect={'apple'} handleSelectValue={(val)=>{console.log(val);}}> 
          <View className='flex-row'>
            <Component.Radio.Item value={'apple'} />
            <Text className='ml-2'>Apple</Text>
          </View>

          <View className='flex-row'>
            <Component.Radio.Item value={'samsung'} />
            <Text className='ml-2'>Samsung</Text>
          </View>
          <View className='flex-row'>
            <Component.Radio.Item value={'Realme'} />
            <Text className='ml-2'>Realme</Text>
          </View>
          <View className='flex-row'>
            <Component.Radio.Item value={'Asus'} />
            <Text className='ml-2'>Asus</Text>
          </View>
        </Component.Radio.RadioGroup>
      </View>
      {/* Display Switch components   */}
      <View style={{rowGap:5}}>
        <Component.H3 className='text-center'> Switch components </Component.H3> 
        <Component.Switch handleSwitch={(val)=>{console.log(val);}} />
      </View>

      {/* Display Slider components   */}
      <View style={{rowGap:5}}>
        <Component.H3 className='text-center'> Slider components </Component.H3> 
        <Slider />
      </View>

      {/* Display Toast message  */}
      <View style={{rowGap:5}}>
        <Component.H3 className='text-center'> Toast components </Component.H3> 
        <Component.Button text='Toast success' onPress={()=>show('Success message',{ type:'success'})} />
        <Component.Button text='Toast warning' onPress={()=>show('Warning message',{ type:'warning'})} />
        <Component.Button text='Toast danger' onPress={()=>show('Danger message',{ type:'danger'})} />
        <Component.Button text='Toast normal' onPress={()=>show('Normal message',{ type:'normal'})} />
      </View>
       

      {/* Display button components  */}
      <View style={{rowGap:5}}>
        <Component.H3 className='text-center'> Button components </Component.H3> 
        <Component.Button text='Click Me' />
        <Component.AnimatedButton text='Select Item' />
      </View>

      {/* Display Checkbox components  */}
      <View style={{rowGap:5}}>
        <Component.H3 className='text-center'> Checkbox components </Component.H3> 
        <Component.CheckBox handleCheck={()=>{}} />
      </View>

      {/* Heading  */}
      <View style={{rowGap:5}}>
        <Component.H3 className='text-center'> Heading components </Component.H3>
        <Component.H1> Heading 1</Component.H1>
        <Component.H2> Heading 2</Component.H2>
        <Component.H3> Heading 3</Component.H3>
        <Component.H4> Heading 4</Component.H4>
        <Component.H5> Heading 5</Component.H5>
        <Component.H6> Heading 6</Component.H6> 
      </View>
      {/* Card components  */}
      <View style={{rowGap:5}}>
        <Component.H3 className='text-center'> Card components </Component.H3> 
        <Component.ShapingCard />
      </View>

      {/* Carousal components  */}
      <View style={{rowGap:5}}>
        <Component.H3 className='text-center'> Carousal components </Component.H3> 
        <Component.SimpleCarousal />
      </View>
      
      {/* Carousal components  */}
      <View style={{rowGap:5}}>
        <Component.H3 className='text-center'> Progress components </Component.H3> 
        <Component.Progress percent={50} />
      </View>
  
      {/* Select components  */}
      <View style={{rowGap:5}}>
        <Component.H3 className='text-center'> Select components </Component.H3> 
        <Component.Select />
      </View>

      {/* Platform specific components    */}
      <Component.H2 style={{marginTop:100}} className='text-center'> Platform specific components  </Component.H2> 
      {/* Input components   */}
      <View style={{rowGap:5}}>
        <Component.H3 className='text-center'> Input components </Component.H3> 
        <PComponent.Input /> 
      </View>

    </View>
  </ScrollView>);
}

function Slider(){
  const [slideValue, setSliderValue] = useState(0);
  return (
    <>  
      <Text className='text-center'>{slideValue}</Text>
      <Component.Slider handlePresents={(v)=>setSliderValue(v)} />
    </>
  );
}


