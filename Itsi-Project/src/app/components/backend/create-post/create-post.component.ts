import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
	selector: 'app-create-post',
	templateUrl: './create-post.component.html',
	styleUrls: ['./create-post.component.scss']
})

export class CreatePostComponent implements OnInit {
	constructor(public authService: AuthService, private firestore: AngularFirestore, public router: Router) {}
	ngOnInit(): void {}

	createPost(data: string): void {
		const postdate = new Date()
		const post = {
			author: this.authService.userData.displayName,
			date: postdate.getDate()+"/"+postdate.getMonth()+"/"+postdate.getFullYear()+"-"+postdate.getHours()+":"+postdate.getMinutes()+":"+postdate.getSeconds(),
			htmlContent: data
		};
	
		this.firestore.collection('news').add(post).then(() => {
			console.log('Post created successfully!');
			this.router.navigate(['noticias']);
		}).catch((error) => {
			console.error('Error creating post:', error);
		});
	}
}
