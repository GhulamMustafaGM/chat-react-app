import React, { Component, useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import app from './base';
import {SenderMessages, ReceiverMessages} from './SendMessages';

const ChatRoom = () => {
    let location = useLocation()
    let userId = location.pathname.substring(6)
    let currentUserID = app.auth().currentUser.uid
    const [msgValue, setMsgValue] = useState('')
    const [user, setUser] = useState('')
    const [user, setUser] = useState({
        id:'',
        email:''
    })
    const sendNewMessage = () => {
        setMsgValue('')
        if(msgValue) {
            SenderMessages(msgValue, currentUserID, userId)
            .then(() => {
                console.log('Message send by successfully!')
            }).catch((e) => console.log(e))
            ReceiverMessages(msgValue,currentUserID,userId)
            .then(()=> {
                console.log('Message sent by receiver successfully!')
            }).catch((e) => console.log(e))
        }
    }
    useEffect(() => {
        applicationCache.database().ref(`users/${userId}`)
        .on('value', (user) => {
            console.log('CHAT USER IS ', user.val())
            setUser({
                id:user.val().id,
                email:user.val().email
            })
        })
        // find messages from firebase database
    }, [])
    return (
        <div>
            <h1>Chat Room</h1>
        </div>
    )
}

export default ChatRoom;