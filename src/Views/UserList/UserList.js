import React, { useContext } from 'react'
import { View, FlatList, Alert } from 'react-native'
import { ListItem, Button, Icon } from 'react-native-elements'
import UsersContext from '../../context/UsersContext'

export default props => {

  const { state, dispatch } = useContext(UsersContext)

  function confirmUserDelete(user) {
    Alert.alert('Excluir usuário', 'Deseja excluir o usuário?', [
      {
        text: 'Sim',
        onPress() {
          dispatch({
            type: 'deleteUser',
            payload: user
          })
        }
      },
      {
        text: 'Não'
      }
    ])

  }

  function getAction() {
    return (
      <>
        <Button
          onPress={() => props.navigation.navigate('UserForm', user)}
          type='clear'
          icon={<Icon name='edit' size={25} color='orange' />}
        />

        <Button
          onPress={() => props.navigation.navigate('UserForm', user)}
          type='clear'
          icon={<Icon name='delete' size={25} color='red' />}
        />
      </>
    )
  }

  function getUserItem({ item: user }){
    return (
      <ListItem
        leftAvatar={{source: {uri: user.avatarUrl}}}
        key={user.id}
        title={user.name}
        subtitle={user.email}
        bottomDivider
        rightElement={getAction(user)}
        onPress={() => props.navigation.navigate('UserForm')}
      />
    )
  }

  return (
    <View>
      <FlatList
        keyExtractor={user => user.id}
        data={state}
        renderItem={getUserItem}
      />
    </View>
  )
}