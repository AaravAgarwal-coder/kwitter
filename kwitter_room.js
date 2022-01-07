
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBvz-FqCtjzE0cz12AfJsNWsDn4N8Cy4Hs",
  authDomain: "kwitter-a588b.firebaseapp.com",
  databaseURL: "https://kwitter-a588b-default-rtdb.firebaseio.com",
  projectId: "kwitter-a588b",
  storageBucket: "kwitter-a588b.appspot.com",
  messagingSenderId: "1074484088668",
  appId: "1:1074484088668:web:fbf012ab1ee3e6c243fb99"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + username + "!";

function add_room()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "Adding Room Name"
      });

      localStorage.setItem("room_name",room_name);
       
      window.location = "kwitter_page.html";
}

function getData()
{
      firebase.database().ref("/").on("value",function(snapshot)
      {
            document.getElementById("output").innerHTML = "";

            snapshot.forEach(function(childSnapshot)
            {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room name-"+ Room_names);
                  row = "<div class="room_name" id="+Room_names+" onclick="redirectToRoomName(this.id)">  #"+Room_names+"</div> <hr> <hr>";
                  document.getElementById("output").innerHTML + = row;
            });                              
      });
}

getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = kwitter_page.html;
}




function log_out()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter_login.html";
}

