import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import firebase from 'firebase/app';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    user = null;

    constructor(public auth: AngularFireAuth, private fireDb: AngularFireDatabase) {
        this.checkUser();
    }

    private signedIn = new BehaviorSubject<boolean>(undefined);
    signedIn$ = this.signedIn.asObservable();

    checkUser() {
        this.auth.user.subscribe(res => {
            if (res != null)
                this.signedIn.next(true);
            else
                this.signedIn.next(false);
        });
    }

    login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    signUp(email, password) {
        return this.auth.createUserWithEmailAndPassword(email, password)
    }

    logout() {
        return this.auth.signOut();
    }

    list() {
        this.fireDb.list('prod').valueChanges().subscribe(res => {
            console.log(res);
        });
    }

    upload(path, data) {
        return this.fireDb.object(path).set(data)
    }

}