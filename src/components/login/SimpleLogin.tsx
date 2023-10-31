import { rf, rh, } from 'src/constants/dimensions'
import {Box,  Pressable, Text,} from "@gluestack-ui/themed"
import { Input, Checkbox } from '@platform-components'
import { useState } from 'react'

type appProps = {
    handleLogin?:()=>void,
    title?:string,
    setEmail?:(value:string)=>void,
    emailLabel?:string,
    passwordLabel?:string,
    setPassword?:(value:string)=>void,
    emailPlaceholder?:string,
    passwordPlaceholder?:string,
    onChange?:(value:boolean)=>void
}

export default function SimpleLogin({handleLogin, title, setEmail, setPassword, emailLabel, passwordLabel, emailPlaceholder, passwordPlaceholder }:appProps) {

  return (
        <Box 
            bg='$light100' 
            sx={{
            "@base":{width:"100%", height:"100%"} ,
            "@md":{width:"60%", height:"90%",borderRadius:"$md"},
            "@lg":{width:"50%",height: "80%"},
            }} 
            justifyContent='center'
            alignItems='center'
            >
            <Box rowGap={rh(2)} w={"90%"}>
                <Text fontSize={"$2xl"} color='$trueGray800' fontWeight='$semibold'>{title ? title : "Login"}</Text>
                <Input label={emailLabel ? emailLabel: 'Email'} placeholder={emailPlaceholder?passwordPlaceholder:'Enter email'}  onChangeText={setEmail}/>
                <Input label={ passwordLabel ? passwordLabel :'Password'} placeholder={passwordPlaceholder?passwordPlaceholder: 'Enter password'} onChangeText={setPassword}/>
                <Pressable 
                bg='#ed5684'
                justifyContent='center'
                alignItems='center'
                borderRadius={5}
                sx={{
                _web:{paddingVertical:"$1", ":hover":{bg:'#f81d5f'}}
                }}
                paddingVertical={"$2"}
                onPress={handleLogin}
                >
                <Text 
                    color='$trueGray900'
                    fontWeight='$semibold'
                    fontSize={rf(2.2)}
                    sx={{_web:{ fontSize:rf(1.2)}}}
                >Login</Text>
                </Pressable>
            </Box>
        </Box>
  )
}
