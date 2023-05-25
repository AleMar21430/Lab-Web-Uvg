import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

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

import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
	{ path: '', redirectTo: '/hogar', pathMatch: 'full' },
	{ path: 'iniciar-sesion', component: SignInComponent },
	{ path: 'panel', component: DashboardComponent, canActivate: [AuthGuard] },
	{ path: 'crear-noticia', component: CreatePostComponent, canActivate: [AuthGuard] },

	{ path: 'hogar', component: HomeComponent },
	{ path: 'buletin', component: BulletinComponent },
	{ path: 'iglesia', component: ChurchComponent },
	{ path: 'inspectoria', component: InspectorateComponent },
	{ path: 'noticias', component: NewsComponent },
	{ path: 'sobre-nosotros', component: AboutUsComponent },
	{ path: 'contacto', component: ContactComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})

export class AppRoutingModule {}