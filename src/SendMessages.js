import app from '.base';

// sender message

export default SenderMessages = async (msValue, currentUserId, guestUserId) => {
    try {
        return await app.database()
        .ref(`messages/${currentUserId}`)
        .child(guestUserId)
        .push({
            message: {
                sender: currentUserId,
                receiver: guestUserId,
                msg: msValue
            }
        })
    } catch(error) {
        console.log(error)
    }
}
// receiver message
export default ReceiverMessages = async (msgValue, currentUserId, guestUserId) => {
    try {
        return await app.database().ref(`messages/${guestUserId}`)
        .child(currentUserId)
        .push({
            message: {
                sender: currentUserId,
                receiver: guestUserId,
                msg: msgValue
            }
        })
    }catch(error) {
        console.log(error)
    }
}