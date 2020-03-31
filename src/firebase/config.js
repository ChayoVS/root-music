import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyByS9LfClFCCtY6ilR9G3xHJcgR66mdG0E",
    authDomain: "root-music-ch.firebaseapp.com",
    databaseURL: "https://root-music-ch.firebaseio.com",
    projectId: "root-music-ch",
    storageBucket: "root-music-ch.appspot.com",
    messagingSenderId: "936333228666",
    appId: "1:936333228666:web:36a070e739e444cafc19c3"
}

class Firebase {
    constructor(){
        firebase.initializeApp(config);
        this.auth = firebase.auth();
        this.db = firebase.database();
    }  


//sign in 
    async signin(email, password){
        const user = await firebase.auth().createUserWithEmailAndPassword(email, password).catch(err =>{
            console.log(err);
        });
        return user;
    }

//log in 
    async login(email, password){
        const user = await firebase.auth().signInWithEmailAndPassword(email, password).catch(err =>{
            console.log(err);
        });
        return user;
    }

    async logout(){
        const logout = await firebase.auth().signOut().catch(err => {
            console.log(err);
        });
        return logout;
    }

    async getUserState(){
        return new Promise(resolve => {
            this.auth.onAuthStateChanged(resolve);
        })
    }

}



export default new Firebase();