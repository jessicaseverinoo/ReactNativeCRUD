import React from 'react'
import { View, Text, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import UserList from './../Views/UserList'
import UserForm from './../Views/UserForm'
import { Icon } from 'react-native-vector-icons/Icon';
import { UsersProvider } from './context/UsersContext';

const Stack = createStackNavigator()

const App = () => {
  return (
    <UsersProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="UserList"
          screenOptions="screenOptions">
          <Stack.Screen
            name="UserList"
            component={UserList}
            options={({ navigation }) => {
              return {
                title: 'Lista de Usuários',
                headerRight: () => {
                  <Button
                    onPress={() => navigation.navigate('UserForm')}
                    type='clear'
                    icon={<Icon name='add' size={25} color='white' />}
                  />
                }
              }
            }}
          />
          <Stack.Screen
            name="UserForm"
            component={UserForm}
            options={{
              title: 'Formulário de Usuários'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UsersProvider>
  )
}

export default App

const screenOptions = {
  headerStyle: {
    backgroundColor: '#f4511e'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
}
