/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

const App =()=>{
  const [isHitung, setIsHitung]= useState(0)


  const inputNumber =(value)=>{
    if(isHitung ===0){
      setIsHitung(value)
    }else{
       setIsHitung(isHitung+"" +value )
    }
    // setIsHitung(value)
  }

  const delNumber =()=>{
    if(isHitung.length!==1){
      setIsHitung(isHitung.substring(0, isHitung.length-1))
    }else{
      setIsHitung(0)
    }
     
  }

  const clearInput =()=>{
    setIsHitung(0)
  }
  
  const resultInput =()=>{
    setIsHitung(eval(isHitung))
  }

  return(
  <View style={{flex:1}}>
    <View style={{backgroundColor:"rgb(173,230,216)",flex:1.5}}>
      <View style={{flexDirection:"column-reverse",justifyContent:"center"}}>
      <Text style={{fontSize:25,}}>
        Calculator
      </Text>
      </View>
      <View style={styles.output}>
        <Text style={{ fontSize: 30 }}>{isHitung}</Text>
      </View>
    </View>
    <View style={{ flex:2.5, flexDirection:"row"}}>
      <View style={{backgroundColor:"rgba(212,235,242,0.4)",flex:3}}>
        <View style={{flexDirection:"row" }}>
        <TouchableOpacity style={styles.number} onPress={()=>clearInput()}  >
          <Text style={{fontSize:45}}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.number} onPress={()=>inputNumber("* 0.01")}>
          <Text style={{fontSize:45}}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.number} onPress={()=>delNumber()} disabled={(isHitung===0)?true:false}>
          <Text style={{fontSize:45}}>Del</Text>
        </TouchableOpacity>

        </View>

        <View style={{flexDirection:"row" }}>
        <TouchableOpacity style={styles.number} onPress={()=>inputNumber(7)}>
          <Text style={{fontSize:45}}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.number} onPress={()=>inputNumber(8)}>
          <Text style={{fontSize:45}}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.number} onPress={()=>inputNumber(9)}>
          <Text style={{fontSize:45}}>9</Text>
        </TouchableOpacity>

        </View>
        <View style={{flexDirection:"row" }}>
        <TouchableOpacity style={styles.number} onPress={()=>inputNumber(4)}>
          <Text style={{fontSize:45}}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.number} onPress={()=>inputNumber(5)}>
          <Text style={{fontSize:45}}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.number} onPress={()=>inputNumber(6)}>
          <Text style={{fontSize:45}}>6</Text>
        </TouchableOpacity>

        </View>
        <View style={{flexDirection:"row" }}>
        <TouchableOpacity style={styles.number} onPress={()=>inputNumber(1)}>
          <Text style={{fontSize:45}}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.number} onPress={()=>inputNumber(2)}>
          <Text style={{fontSize:45}}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.number} onPress={()=>inputNumber(3)}>
          <Text style={{fontSize:45}}>3</Text>
        </TouchableOpacity>

        </View>
        

        <View style={{flexDirection:"row" }}>
        <TouchableOpacity style={styles.number} onPress={()=>inputNumber("00")}>
          <Text style={{fontSize:45}}>00</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.number} onPress={()=>inputNumber("0")}>
          <Text style={{fontSize:45}}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.number} onPress={()=>inputNumber(".")}>
          <Text style={{fontSize:45}}>.</Text>
        </TouchableOpacity>

        </View>
      </View>
      
      
      <View style={{flex:1}}>
        <TouchableOpacity style={styles.btn}>
          <FontAwesome5 name="divide" size={50} style={styles.font} onPress={()=>inputNumber("/")}/>
          
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <FontAwesome5 name="times" size={50} style={styles.font} onPress={()=>inputNumber("*")}/>
          
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <FontAwesome5 name="minus" size={50} style={styles.font} onPress={()=>inputNumber("-")}/>
          
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <FontAwesome5 name="plus" size={50} style={styles.font} onPress={()=>inputNumber("+")}/>
          
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={()=>resultInput()}>
          <FontAwesome5 name="equals" size={50} style={styles.font}/>
          
        </TouchableOpacity>
      </View>
    </View>
  </View>

  )

}
const styles = StyleSheet.create({
  output: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white', justifyContent: 'flex-end', alignItems: 'flex-end', flex: 1
  },
  btn :{
    backgroundColor:"white",
    alignSelf:"center",
    marginVertical:20
  },
  font:{
    color:"rgb(173,230,216)"
  },
  number :{
    marginHorizontal:30,
    marginVertical:18
  }
})


export default App;
