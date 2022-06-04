const firebaseConfig = {
    apiKey: "AIzaSyA928p2n5O21CEuetkKE3zj7MK17MpXpCg",
    authDomain: "tsweb-a12a4.firebaseapp.com",
    databaseURL: "https://tsweb-a12a4-default-rtdb.firebaseio.com",
    projectId: "tsweb-a12a4",
    storageBucket: "tsweb-a12a4.appspot.com",
    messagingSenderId: "266825455588",
    appId: "1:266825455588:web:654dc4bd73de1460e559f1",
    measurementId: "G-ZDJT7Z19CN"
  };

firebase.initializeApp(firebaseConfig);

var messagesRef= firebase.database().ref('eventcreate');

document.getElementById('eventcreate').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();
    var name=getInputVal('name');
    var phone=getInputVal('phone');
    var email=getInputVal('email');
    var institute=getInputVal('institute')
    var instituteadd=getInputVal('instituteadd')
    var institutezip=getInputVal('institutezip')

    saveMessage(name,email,phone,institute,instituteadd,institutezip);
    document.querySelector('.alert').style.display='block';
    setTimeout(()=>{
        document.querySelector('.alert').style.display='none';
    },2000)
    document.getElementById('eventcreate').reset();
}


function getInputVal(id){
    return document.getElementById(id).value;
}

function saveMessage(name,email,phone,institute,institutezip,instituteadd){
    var newMessageRef=messagesRef.push();
    newMessageRef.set({
        name: name,
        phone:phone,
        email:email,
        institute:institute,
        instituteadd:instituteadd,
        institutezip:institutezip
    })
}