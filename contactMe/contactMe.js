function submitHandler() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phoneNumb = document.getElementById("phoneNumb").value;
    let subject = document.getElementById("subject").value;
    let yourMsg = document.getElementById("yourMsg").value;

    if (name === '') {
        return alert("Please enter your name!")
    } else if (email === '') {
        return alert("Please enter your email!")
    }else if (phoneNumb === '') {
        return alert("Please enter your phone number!")
    }else if (subject === '') {
        return alert("Please choose your subject!")
    }else if (yourMsg === '') {
        return alert("Please enter your message!")
    }

    const data = {
        name,
        email,
        phoneNumb,
        subject,
        yourMsg
    }

    const myEmail = "officialeric010@gmail.com"

    let a = document.createElement("a");
    a.href = `https://mail.google.com/mail?view=cm&fs=1&to=${myEmail}&su=${subject}&body=${name}%20-%20${phoneNumb}%0A${yourMsg}`
    a.click()

    console.log(data)
}