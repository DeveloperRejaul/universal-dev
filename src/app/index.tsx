import {Text, View , StyleSheet, TextInput, Pressable, Platform} from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { rf, rh, rw } from 'src/constants/dimensions'
import { platform } from 'src/utils/praltfrom'




export default function index() {
   const router =  useRouter()

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
          <View style={styles.from}>
            <Text style={styles.title}>Login</Text>
            <View>
              <Text style={styles.label}>Email</Text>
              <TextInput style={styles.input}/>
            </View>
            <View>
              <Text style={styles.label}>Password</Text>
              <TextInput style={styles.input}/>
            </View>
            <Pressable style={styles.btn} onPress={()=>router.replace("/(tab)/(one)/one")}>
              <Text style={styles.btnText}>Login</Text>
            </Pressable>
          </View>
      </View>
     
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1, 
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#6d9ac4"
  },
  inner:{
    height: platform([rh(100),rh(100), rh(90)],rh(110)),
    width:platform([rw(100),rw(100), rw(50), rw(40) ] ,rw(100)),
    backgroundColor:"#fff",
    borderRadius:platform([0,0, 10 ],0),
    padding:20,
    elevation:5,
    shadowColor:"#000",
    shadowOffset:{
      height:0,
      width:0
    },
    shadowRadius:5,
    shadowOpacity:.5,
    justifyContent:"center",
    alignItems:"center"
  },
  title:{
    fontSize:platform(rf(1.8), rf(2.5)),
    fontWeight:"600"
  },
  from:{
    rowGap:rh(2),
    width:"90%"
   },
  btn:{
    backgroundColor:"#ed5684",
    borderRadius:5,
    justifyContent:"center",
    alignItems:"center",
    paddingVertical:3,
  },
  btnText:{
    fontWeight:"600",
    fontSize:platform(rf(1.1),rf(2))
  },
  input:{
    borderWidth:1,
    borderColor:"#1717175a",
    borderRadius:4,
    paddingVertical:3,
    paddingHorizontal:5,
  },
  label:{
    color:"#000",
    fontWeight:"400"
  }
})