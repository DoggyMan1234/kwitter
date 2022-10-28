
//ADD YOUR FIREBASE LINKS HERE
const config = {
      apiKey: "AIzaSyBjOKG2T_6LPMzY4E09cWSmYcD6fk3iogM",
      authDomain: "socialmedia-5a07d.firebaseapp.com",
      databaseURL: "https://socialmedia-5a07d-default-rtdb.firebaseio.com",
      projectId: "socialmedia-5a07d",
      storageBucket: "socialmedia-5a07d.appspot.com",
      messagingSenderId: "862023682281",
      appId: "1:862023682281:web:f63a02ebebba358accc878",
      measurementId: "G-4LC9BM1X1H"
    };
    
    // Initialize Firebase
    firebase.initializeApp(config);

    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html"
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
