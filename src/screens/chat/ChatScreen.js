import { View, Text } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

const ChatScreen = ({route}) => {
  
  const [menuVisible, setmenuVisible] = useState(false);

  const OpenMenu = ()=>{
    setmenuVisible(true);

  }
  const CloseMenu = ()=>{
    setmenuVisible(false);
  }
  
    const [messages, setMessages] = useState([]);
    useEffect(() => {
      setMessages([
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: route?.params?.item?.picture,
          },
        },
        {
            _id: 2,
            text: 'Hello developer',
            createdAt: new Date(),
            user: {
              _id: 1,
              name: 'React Native',
              avatar: route?.params?.item?.picture,
            },
          },
          {
            _id: 3,
            text: 'what are you doing',
            createdAt: new Date(),
            user: {
              _id: 3,
              name: 'React Native',
              avatar: route?.params?.item?.picture,
            },
          },
      ])
    }, []);

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
      }, [])
    
  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}

export default ChatScreen