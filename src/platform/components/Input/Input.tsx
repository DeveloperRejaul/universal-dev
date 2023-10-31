import React from 'react'
import { Input, InputField ,Text} from '@gluestack-ui/themed'


type appProps = {
    label?: string,
    placeholder?:string,
    onChangeText?: (value: any) => void
}

export default function({label, placeholder, onChangeText}:appProps) {
  return (
    <>
        <Text>{label}</Text>
        <Input
            variant="outline"
            size="sm"
            borderColor={"$trueGray300"}
            sx={{":focus":{borderColor:'#63475035'}}}
        >
            <InputField type='text' placeholder={placeholder} onChangeText={onChangeText ?onChangeText :()=>{}}/>
        </Input>
    </>
    
  )
}