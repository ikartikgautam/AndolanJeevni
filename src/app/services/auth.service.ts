import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import firebase from 'firebase/app';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    userData = null;

    constructor(public auth: AngularFireAuth, private fireDb: AngularFireDatabase, private afs: AngularFirestore) {
        this.checkUser();
    }

    private signedIn = new BehaviorSubject<boolean>(undefined);
    signedIn$ = this.signedIn.asObservable();

    checkUser() {
        this.auth.user.subscribe(res => {
            console.log(res)
            if (res != null)
                this.signedIn.next(true);
            else
                this.signedIn.next(false);
        });
    }

    getUserState() {
        return this.auth.authState
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
        this.afs.collection('prod').valueChanges().subscribe(res => {
            console.log('----', res);
        })
    }

    upload(path, data) {
        // return this.fireDb.object(path).set(data)
        return this.afs.doc(path).set(data);
    }

    getUserDataFS(Uid) {
        return this.afs.collection("prod").doc(Uid).valueChanges();
    }

}