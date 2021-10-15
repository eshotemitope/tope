function SubmitMessage() {
    let fullName = document.getElementById('fullName')
    let email = document.getElementById('email')
    let message = document.getElementById('message')

    let messageObject = {
        fullName: fullName.value,
        email: email.value,
        message: message.value
    }

    console.table(messageObject)
}