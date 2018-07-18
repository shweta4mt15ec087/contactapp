if(localStorage.getItem("contacts") == null )
   localStorage.setItem("contacts",JSON.stringify([]));

var tempIndex = -1;
viewdata();


function addcontact(){
    var contact = getContact();
     var contacts = getDataFromLocalStorage();
    contacts.push(contact);
    updateDataToLocalStorage(contacts);
   clearFormData();
    viewdata();
}

function viewdata(){
    var contacts = getDataFromLocalStorage();
    var data = "";
    if(contacts.length == 0){
        data="contacts not yet added......"
    }else{
        
    
    data += "<table id = 'contacts'>"
    for (var i =0 ;i < contacts.length ; i++){
        data += "<tr>" ;
        data += "<td>" + contacts[i].name + "</td>";
         data += "<td>" + contacts[i].email + "</td>";
         data += "<td>" + contacts[i].Mobile + "</td>";
        data += "<td><button onclick = editcontact(" + i + ")>Edit</button>";
        data += "<td><button onclick = deletecontact(" + i + ")>Delete</button>";
        data += "</tr>";
    }
    data += "</table>";
    }
    
    document.getElementById("content").innerHTML = data;
}
function deletecontact(index){
     var contacts = getDataFromLocalStorage();
    contacts.splice(index,1);
      updateDataToLocalStorage(contacts); 
    viewdata();
}
function editcontact(index){
    
 var contacts = getDataFromLocalStorage();
    contact = contacts[index];
    tempIndex=index;
      document.getElementById('cname').value=contact.name;
      document.getElementById('email').value=contact.email;
      document.getElementById('Mobile').value=contact.Mobile;
     document.getElementById("add").style.display="none";
     document.getElementById("update").style.display="block";
    
}
function updatecontact(){
    var contacts = getDataFromLocalStorage();
    
    contact = getContact();
    contacts.splice(tempIndex,1,contact);
  
    updateDataToLocalStorage(contacts); 
    
   clearFormData();
     document.getElementById("add").style.display="block";
     document.getElementById("update").style.display="none";
    viewdata();
    }

function clearFormData(){ 
    document.getElementById("cname").value=''; 
    document.getElementById("email").value='';
     document.getElementById("Mobile").value='';
    
}

function getContact(){
var cname
    =document.getElementById('cname').value;
      var email
    =document.getElementById('email').value;
      var Mobile
    =document.getElementById('Mobile').value;
      contact = {
        "name": cname,
        "email": email,
         "Mobile": Mobile
    };
    return contact;
}
function getDataFromLocalStorage(){
    contacts =
        JSON.parse(localStorage.getItem("contacts"));
    return contacts;
    
}

function updateDataToLocalStorage(updatedData){
     localStorage.setItem("contacts",JSON.stringify(updatedData));
}