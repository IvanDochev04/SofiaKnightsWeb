import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './common/about/about.component';
import { ContactsComponent } from './common/contacts/contacts.component';
import { FixturesListComponent } from './fixtures/fixtures-list/fixtures-list.component';
import { HomeComponent } from './home/home/home.component';
import { KotmComponent } from './kotm/kotm/kotm.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { PlayerComponent } from './team/player/player.component';
import { TeamListComponent } from './team/team-list/team-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'fixtures',
    component: FixturesListComponent
  },
  {
    path: 'team',
    component: TeamListComponent
  },
  {
    path: 'news',
    component: NewsListComponent
  },
  {
    path: 'kotm',
    component: KotmComponent,
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '**',
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
