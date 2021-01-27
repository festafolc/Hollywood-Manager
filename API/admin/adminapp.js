let app = new function() {
    this.element = document.getElementById('usersTable');
    this.users = [];
  
    //Create a new user
    this.create = function () {
        let userName = document.getElementById('setUser').value;
        let userEmail = document.getElementById('setEmail').value;
  
        if (userName && userEmail) {
            let user = {
              name : userName,
              email : userEmail
            }
            this.users.push(JSON.parse(JSON.stringify(user)));
            document.getElementById('setUser').value = null;
            document.getElementById('setEmail').value = null;
            this.read();
        }
    };

    //Display new user on the screen
    this.read = function() {
      let data = '';
      if (this.users.length > 0) {
        for (i = 0; i < this.users.length; i++) {
          data += '<tr>';
          data += '<th>Username</th>';
          data += '<th>Email</th>';
          data += '</tr>';
          data += '<tr>';
          data += '<td>' + (i+1) + ". " + this.users[i].name + ' ' +'</td>';
          data += '<td>' + ' ' + this.users[i].email + '</td>';
          data += '<td><button onclick="app.update(' + i + ' ' + ')"  class="btn btn-warning">Update</button></td>';
          data += '<td><button onclick="app.delete(' + i + ' ' + ')"  class="btn btn-danger">Delete</button></td>';
          data += '</tr>';
          data += '<tr>';
          data += '<td><hr></td>';
          data += '<td><hr></td>';
          data += '<td><hr></td>';
          data += '<td><hr></td>';
          data += '</tr>';
        }
      }
      this.count(this.users.length);
      return this.element.innerHTML = data;
    };
  
    //Update user
    this.update = function (item) {
      let updateName = document.getElementById('updateName');
      let updateEmail = document.getElementById('updateEmail');
      let updateUserIndex = document.getElementById('updateUserIndex');
      updateName.value = this.users[item].name;
      updateEmail.value = this.users[item].email;
      updateUserIndex.value = item;
      document.getElementById('usersBox').style.display = 'block';
    };

    //Save all changes of the user
    this.save = function (){
      let updateName = document.getElementById('updateName');
      let updateEmail = document.getElementById('updateEmail');
      let updateUserIndex = document.getElementById('updateUserIndex');
      let user = {
        name : updateName.value,
        email : updateEmail.value
      }
      self = this;
      if (user) {
        self.users[updateUserIndex.value] = user;
        self.read();
        CloseInput();
      }
    }
 
    //Delete user
    this.delete = function (item) {
      this.users.splice(item, 1);
      this.read();
    };
  
    //Count number of users and display
    this.count = function(data) {
      let element = document.getElementById('counter');
      let name = 'Users';
  
      if (data) {
          if(data ==1){
              name = 'User'
          }
          element.innerHTML = data + ' ' + name ;
      }
      else {
        element.innerHTML = 'No ' + name;
      }
    };
  
  }
  
app.read();

//Hide div with id=userBox
function CloseInput() {
document.getElementById('usersBox').style.display = 'none';
}