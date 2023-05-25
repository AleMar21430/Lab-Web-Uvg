import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AppComponent } from './app.component';

import { AuthService } from './shared/services/auth.service';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

import { CreatePostComponent } from './components/backend/create-post/create-post.component';
import { DashboardComponent } from './components/backend/dashboard/dashboard.component';
import { SignInComponent } from './components/backend/sign-in/sign-in.component';

import { InspectorateComponent } from './components/index/inspectorate/inspectorate.component';
import { AboutUsComponent } from './components/index/about-us/about-us.component';
import { BulletinComponent } from './components/index/bulletin/bulletin.component';
import { ChurchComponent } from './components/index/church/church.component';
import { ContactComponent } from './components/index/contact/contact.component';
import { NewsComponent } from './components/index/news/news.component';

import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateBulletinComponent } from './components/backend/create-bulletin/create-bulletin.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';

@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent,
		SignInComponent,
		HomeComponent,
		CreatePostComponent,
		NewsComponent,
		ChurchComponent,
		BulletinComponent,
		InspectorateComponent,
		AboutUsComponent,
		ContactComponent,
		FooterComponent,
  CreateBulletinComponent,
  MaintenanceComponent,
	],
	imports: [
		BrowserModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireAuthModule,
		AngularFirestoreModule,
		AngularFireStorageModule,
		AngularFireDatabaseModule,
		AppRoutingModule,
	],
	providers: [AuthService],
	bootstrap: [AppComponent],
})

export class AppModule {}