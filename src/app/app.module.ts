import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { ButtonComponent } from './components/common/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AboutComponent } from './components/common/about/about.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { PlayerComponent } from './components/playerComponents/player/player.component';
import { PlayerCardComponent } from './components/playerComponents/player-card/player-card.component';
import { PlayerItemComponent } from './components/playerComponents/player-item/player-item.component';
import { HomeComponent } from './components/common/home/home.component';
import { NewsComponent } from './components/newsComponents/news/news.component';
import { NewsCardComponent } from './components/newsComponents/news-card/news-card.component';
import { NewsItemComponent } from './components/newsComponents/news-item/news-item.component';
import { FixtureComponent } from './components/fixtureComponents/fixture/fixture.component';
import { FixtureItemComponent } from './components/fixtureComponents/fixture-item/fixture-item.component';
import { AddPlayerComponent } from './components/playerComponents/add-player/add-player.component';
import { UpdatePlayerComponent } from './components/playerComponents/update-player/update-player.component';
import { UpdateNewsComponent } from './components/newsComponents/update-news/update-news.component';
import { AddNewsComponent } from './components/newsComponents/add-news/add-news.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },

  { path: 'players', component: PlayerComponent },
  { path: 'player/:id', component: PlayerCardComponent },
  { path: 'addPlayer', component: AddPlayerComponent },
  { path: 'updatePlayer/:id', component: UpdatePlayerComponent },

  { path: 'news', component: NewsComponent },
  { path: 'news/:id', component: NewsCardComponent },
  { path: 'addNews', component: AddNewsComponent },
  { path: 'updateNews/:id', component: UpdateNewsComponent },

  { path: 'fixtures', component: FixtureComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent,
    PlayerComponent,
    PlayerCardComponent,
    PlayerItemComponent,
    HomeComponent,
    NewsComponent,
    NewsItemComponent,
    NewsCardComponent,
    FixtureComponent,
    FixtureItemComponent,
    AddPlayerComponent,
    UpdatePlayerComponent,
    UpdateNewsComponent,
    AddNewsComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
