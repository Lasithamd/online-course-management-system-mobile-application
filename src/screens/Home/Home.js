import React from 'react';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { Button, View } from 'react-native-paper';

function Home(){
    return(
       <View>
  <ActivityIndicator animating={true} color={MD2Colors.red300} />
       </View>
      
        
      
    )
   
}
export default Home;