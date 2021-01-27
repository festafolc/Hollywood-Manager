let app = new function() {
    this.element = document.getElementById('pFavourites');
    this.elementCinemas = document.getElementById('pFavouritesCinemas');
    this.favouritePeople = [];
    this.favouriteCinemas = [];

    this.starPeople = function(event) {
        let btn = event.getAttribute("data-key");
        let fav = this.favouritePeople.findIndex(item => item == btn);
        if(fav === -1){
            this.favouritePeople.push(btn);
            event.children[0].style = 'color: #FFDF00;';
        } else {
            this.favouritePeople.splice(fav, 1);
            event.children[0].style = '';
        }
        this.showFavourites();
    };

    this.showFavourites = function (){
        let data = '<h4>Your favourites are </h4>';
        if (this.favouritePeople.length > 0){
            for (i = 0; i < this.favouritePeople.length; i++){
                data += this.favouritePeople[i] + ', ';
            }
        } else {
            data = '';
        }
        return this.element.innerHTML = data.slice(0, -2); 
    };

    this.starCinemas = function(ev) {
        let btnCinema = ev.getAttribute("data-key");
        let favCinemas = this.favouriteCinemas.findIndex(item => item == btnCinema);
        if(favCinemas === -1){
            this.favouriteCinemas.push(btnCinema);
            ev.children[0].style = 'color: #FFDF00;';
        } else {
            this.favouriteCinemas.splice(favCinemas, 1);
            ev.children[0].style = '';
        }
        this.showFavouritesCinemas();
    };

    this.showFavouritesCinemas = function (){
        let dataCinemas = '<h4>Your favourites cinemas are </h4>';
        if (this.favouriteCinemas.length > 0){
            for (i = 0; i < this.favouriteCinemas.length; i++){
                dataCinemas += this.favouriteCinemas[i] + ', ';
            }
        } else {
            dataCinemas = '';
        }
        return this.elementCinemas.innerHTML = dataCinemas.slice(0, -2); 
    };
};


let regLog = new function() {
    // this.registerUser = [];

    // this.register = function(){
    //     userName = document.getElementById('username').value;
    //     userEmail = document.getElementById('email').value;
    //     userPassword = document.getElementById('password').value;
    
    //     registerNewUser = {
    //         name : userName,
    //         email : userEmail,
    //         password : userPassword
    //       }
        
    //     this.registerUser.push(JSON.parse(JSON.stringify(registerNewUser)));
    
    //     document.getElementById('usernameReg').value = null;
    //     document.getElementById('emailReg').value = null;
    //     document.getElementById('passwordReg').value = null;
    
    //     alert("User has been registered ");

    //     //Sending register data to the server
    //     const data = { userName, userEmail, userPassword };
    //     const options = {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //           },
    //         body: JSON.stringify(data)
    //     }

    //     fetch('/api', options);
    // }

    this.login = function(){
        let usernameLog = document.getElementById('usernameLog').value;
        let passwordLog = document.getElementById('passwordLog').value;
        if (usernameLog && passwordLog) {
            document.getElementById('people').style.display = 'block';
            document.getElementById('movies').style.display = 'block';
            document.getElementById('studios').style.display = 'block';
            document.getElementById('cinemas').style.display = 'block';
            document.getElementById('openEditProfile').style.display = 'block';
        }
        
    }

    this.editUser = function(){
        console.log(userName);
        console.log(userEmail);
        console.log(userPassword);
        let newUsernameEdition = document.getElementById('uEn').value;
        let newUserEmailEdition = document.getElementById('uEe').value;
        let newPasswordEdtion = document.getElementById('uEp').value;
        
        registerNewUser.name = newUsernameEdition;
        registerNewUser.email = newUserEmailEdition;
        registerNewUser.password = newPasswordEdtion;

        console.log(registerNewUser.name);
        console.log(registerNewUser.email);
        console.log(registerNewUser.password);

    }
}

function load (){
    document.getElementById('people').style.display = 'none';
    document.getElementById('movies').style.display = 'none';
    document.getElementById('studios').style.display = 'none';
    document.getElementById('cinemas').style.display = 'none';
    document.getElementById('openEditProfile').style.display = 'none';
}

window.onload = load;