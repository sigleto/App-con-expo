import React from 'react';
import { Provider } from './componentes/Contexto/Provider';
import Navigation from './componentes/Navigator';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Presentacion1 from './componentes/Presentacion/Presentacion1';
import Presentacion2 from './componentes/Presentacion/Presentacion2';
import Presentacion3 from './componentes/Presentacion/Presentacion3';
import { PresentacionesStack } from './componentes/Navigator';
const Stack = createStackNavigator();

export default function App() {
  return (
   
    <Provider>
      <NavigationContainer>
     
      <Stack.Navigator initialRouteName="PresentacionesStack" headerMode="none">
          <Stack.Screen name="PresentacionesStack" component={PresentacionesStack} />
          <Stack.Screen name="Navigation" component={Navigation} />
       </Stack.Navigator>
           
   </NavigationContainer>
   </Provider>
  
   
  );
}

