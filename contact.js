function handleFormSubmit(event){
    event.preventDefault()
    //console.log(event);

    const nameInput = document.getElementById("name")
    const surnameInput = document.getElementById("surname")
    const emailInput = document.getElementById("email")
    const messageInput = document.getElementById("message")


    const isNameValid = nameInput.value.trim() !== '' && nameInput.validity.valid
    console.log(isNameValid);
    const isSurnameValid = surnameInput.value.trim() !== '' && surnameInput.validity.valid
    console.log(isSurnameValid);
    const isEmailValid = emailInput.value.trim() !== '' && emailInput.validity.valid
    console.log(isEmailValid);
    const isMessageValid = messageInput.value.trim() !== '' && messageInput.validity.valid
    console.log(isEmailValid);

    const isFormValid =isNameValid && isSurnameValid && isEmailValid && isMessageValid

    if(isFormValid){ 
        //
        const formData = new FormData(event.target)
        console.log(FormData);
        fetch("https://formspree.io/f/xeqyvzvj", 
            {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                } 
            }
        )
        .then( response => response.json())
        .then( data => {
            console.log(data);
            if(data.ok){
                alert('Email successfully sent!')
            }
        })

        console.log('code is running');
    }else{
        if(isNameValid !== true){
            const nameSpan = document.getElementById('name-span')
            nameSpan.classList.remove('hidden')
        }

        if(isSurnameValid !== true){
            const surnameSpan = document.getElementById('surname-span')
            surnameSpan.classList.remove('hidden')
        }
        if(isEmailValid !== true){
            const emailSpan = document.getElementById('email-span')
            emailSpan.classList.remove('hidden')
        }

        if(isMessageValid !== true){
            const messageSpan = document.getElementById('message-span')
            messageSpan.classList.remove('hidden')
        }
    }
} 