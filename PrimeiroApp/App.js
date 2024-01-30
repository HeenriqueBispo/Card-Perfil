import React from 'react';
import { Image,StyleSheet, Text, View } from 'react-native';
import capa from './assets/fundo.png'
import perfil from './assets/foto-perfil.jpg'



export default function App() {
  return (
    <View style={styles.container}>
        <Image source={capa} style={styles.imgcapa} />

    

      <View style={styles.boxcapa}>
          <Image source={perfil} style={styles.imgperfil}     />

          <Text style={styles.titulo}>Henrique Bispo</Text>
          <Text style={styles.descricao}>Técnico em Desenvolvimento de Sistemas com ênfase em Kotlin, Atualmente estou me especificando em Desenvolvimento Mobile pela instituição  “Dev Media” com ênfase em “React” e “React native”  </Text>


      </View>


      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
  
    
  },
 

boxcapa:{

  flex:1,
  alignItems: 'center',
  
  


},



imgcapa:{

  flex:1,
  marginBottom: 10,
  width: 390,

},


imgperfil:{

    width:120,  
    height: 120,
    borderRadius: 100,
    marginBottom:10,
},



titulo:{

    fontSize:15,
    fontWeight:'bold',
},



descricao:{

    textAlign:'center',
    fontSize: 13,
    marginTop: 5,
    marginHorizontal: 20,
},









});
