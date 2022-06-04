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

var eventRegisterRef= firebase.database().ref('eventRegister');

document.getElementById('registerForm').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();
    var name=getInputVal('name');
    var email=getInputVal('email');
    var phone=getInputVal('phone');
    var domain=getInputVal('domain');
    var year=getInputVal('year');
    var location=getInputVal('location');

    saveMessage(name,email,phone,domain,year,location);
    document.querySelector('.alert').style.display='block';
    setTimeout(()=>{
        document.querySelector('.alert').style.display='none';
    },2000)
    document.getElementById('registerForm').reset();
}


function getInputVal(id){
    return document.getElementById(id).value;
}

function saveMessage(name,email,phone,domain,year,location){
    var newMessageRef=eventRegisterRef.push();
    newMessageRef.set({
        name: name,
        email:email,
        phone:phone,
        domain:domain,
        year:year,
        location:location
    })
}