import { Injectable, NgZone } from '@angular/core';
import { User } from '../services/user';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	userData: any;
	userCollection: AngularFirestoreCollection<User>;
	users: any;

	constructor(
		public afs: AngularFirestore,
		public afAuth: AngularFireAuth,
		public router: Router,
		public ngZone: NgZone
	) {
		this.userCollection = this.afs.collection<User>('news');
		this.users = this.userCollection.valueChanges();

		this.afAuth.authState.subscribe((user) => {
		if (user) {
			this.userData = user;
			localStorage.setItem('user', JSON.stringify(this.userData));
			JSON.parse(localStorage.getItem('user')!);
		} else {
			localStorage.setItem('user', 'null');
			JSON.parse(localStorage.getItem('user')!);
		}
		});
	}

	get isLoggedIn(): boolean {
		const user = JSON.parse(localStorage.getItem('user')!);
		return user !== null && user.emailVerified !== false ? true : false;
	}

	GoogleAuth() {
		return this.afAuth.signInWithPopup(new auth.GoogleAuthProvider()).then((result: any) => {
			const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${result.user.email}`);
			userRef.valueChanges().subscribe((data: any) => {
				if (data.author) {
					this.router.navigate(['panel']);
				} else {
					window.alert("No tienes autorización")
				}
			})
		});
	}

	RequestVerification() {
		return this.afAuth.signInWithPopup(new auth.GoogleAuthProvider()).then((result: any) => {
			this.uploadData(result.user);
		})
	}

	uploadData(user: any) {
		const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.email}`);
		const userData: User = {
			uid: user.uid,
			email: user.email,
			displayName: user.displayName,
			photoURL: user.photoURL
		};
		return userRef.set(userData, {
		merge: true,
		});
	}

	SignOut() {
		return this.afAuth.signOut().then(() => {
		localStorage.removeItem('user');
		this.router.navigate(['hogar']);
		});
	}
}