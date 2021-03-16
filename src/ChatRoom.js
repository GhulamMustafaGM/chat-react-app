import React, { Component, useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const ChatRoom = () => {
    let location = useLocation()
    let userId = location.pathname.substring(6)
    const [user, setUser] = useState({
        id:'',
        email:''
    })
    useEffect(() => {
        applicationCache.database().ref(`users/${userId}`)
        .on('value', (user) => {
            console.log('CHAT USER IS ', user.val())
            setUser({
                id:user.val().id,
                email:user.val().email
            })
        })
    }, [])
    
}

export default ChatRoom;