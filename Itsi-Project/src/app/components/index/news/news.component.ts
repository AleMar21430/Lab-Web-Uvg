import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

interface News {
	author: string;
	date: Date;
	htmlContent: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./../../index.component.scss','./news.component.scss']
})

export class NewsComponent implements OnInit {

	postsCollection: AngularFirestoreCollection<News>;
	news: any;

	constructor(public authService: AuthService, private firestore: AngularFirestore) {
		this.postsCollection = this.firestore.collection<News>('news');
		this.news = this.postsCollection.valueChanges();
	}

	ngOnInit(): void {}
}
