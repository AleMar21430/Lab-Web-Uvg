import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/compat/firestore';

interface Bulletin {
	author: string;
	date: Date;
	htmlContent: string;
}

@Component({
	selector: 'app-bulletin',
	templateUrl: './bulletin.component.html',
	styleUrls: ['./../../index.component.scss','./bulletin.component.scss']
})

export class BulletinComponent implements OnInit {

	postsCollection: AngularFirestoreCollection<Bulletin>;
	bulletins: any;

	constructor(private firestore: AngularFirestore) {
		this.postsCollection = this.firestore.collection<Bulletin>('bulletins');
		this.bulletins = this.postsCollection.valueChanges();
	}
	ngOnInit(): void {
	}

}
