import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { ErrorHandlerService } from './services/error-handler.service';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './guards/auth.guard';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { ForbiddenComponent } from './components/common/forbidden/forbidden.component';
import { AdminGuard } from './guards/admin.guard';
import { NotFound404Component } from './components/common/not-found404/not-found404.component';
import { AddFixtureComponent } from './components/fixtureComponents/add-fixture/add-fixture.component';
import { UpdateFixtureComponent } from './components/fixtureComponents/update-fixture/update-fixture.component';
import { AddTeamComponent } from './components/fixtureComponents/add-team/add-team.component';
import { TeamsComponent } from './components/fixtureComponents/teams/teams.component';
import { UpdateTeamComponent } from './components/fixtureComponents/update-team/update-team.component';
import { AwardComponent } from './components/awardComponents/award/award.component';
import { AwardItemComponent } from './components/awardComponents/award-item/award-item.component';
import { AddAwardComponent } from './components/awardComponents/add-award/add-award.component';
import { UpdateAwardComponent } from './components/awardComponents/update-award/update-award.component';
import { TacticComponent } from './components/tacticComponents/tactic/tactic.component';
import { TacticItemComponent } from './components/tacticComponents/tactic-item/tactic-item.component';
import { TacticCardComponent } from './components/tacticComponents/tactic-card/tactic-card.component';
import { AddTacticComponent } from './components/tacticComponents/add-tactic/add-tactic.component';
import { UpdateTacticComponent } from './components/tacticComponents/update-tactic/update-tactic.component';
import { TacticHomeComponent } from './components/tacticComponents/tactic-home/tactic-home.component';

const appRoutes: Routes = [
  { path: 'authentication', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'privacy', component: PrivacyComponent,  canActivate: [AdminGuard, AuthGuard]},
  { path: 'forbidden', component: ForbiddenComponent },
  { path: '404', component: NotFound404Component },
  
  
  { path: 'players', component: PlayerComponent },
  { path: 'player/:id', component: PlayerCardComponent },
  { path: 'addPlayer', component: AddPlayerComponent, canActivate: [AdminGuard]},
  { path: 'updatePlayer/:id', component: UpdatePlayerComponent, canActivate: [AdminGuard]},
  
  { path: 'news', component: NewsComponent },
  { path: 'news/:id', component: NewsCardComponent },
  { path: 'addNews', component: AddNewsComponent, canActivate: [AdminGuard] },
  { path: 'updateNews/:id', component: UpdateNewsComponent, canActivate: [AdminGuard] },
  
  { path: 'fixtures', component: FixtureComponent },
  { path: 'addFixture', component: AddFixtureComponent, canActivate: [AdminGuard] },
  { path: 'updateFixture/:id', component: UpdateFixtureComponent, canActivate: [AdminGuard] },

  { path: 'teams', component: TeamsComponent,canActivate: [AdminGuard]},
  { path: 'addTeam', component: AddTeamComponent, canActivate: [AdminGuard] },
  { path: 'updateTeam/:id', component: UpdateTeamComponent, canActivate: [AdminGuard] },

  { path: 'awards', component: AwardComponent},
  { path: 'addAward', component: AddAwardComponent, canActivate: [AdminGuard] },
  { path: 'updateAward/:id', component: UpdateAwardComponent, canActivate: [AdminGuard] },

  { path: 'tactic', component: TacticHomeComponent,canActivate: [AuthGuard]},
  { path: 'tactic/:type', component: TacticComponent ,canActivate: [AuthGuard] },
  { path: 'tactic/:type/:id', component: TacticCardComponent ,canActivate: [AuthGuard]},
  { path: 'addTactic', component: AddTacticComponent, canActivate: [AdminGuard] },
  { path: 'updateTactic/:id', component: UpdateTacticComponent, canActivate: [AdminGuard] },




  { path: '**', component: NotFound404Component },
];
export function tokenGetter() {
  return localStorage.getItem("token");
}
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
    PrivacyComponent,
    ForbiddenComponent,
    NotFound404Component,
    AddFixtureComponent,
    UpdateFixtureComponent,
    AddTeamComponent,
    TeamsComponent,
    UpdateTeamComponent,
    AwardComponent,
    AwardItemComponent,
    AddAwardComponent,
    UpdateAwardComponent,
    TacticComponent,
    TacticItemComponent,
    TacticCardComponent,
    AddTacticComponent,
    UpdateTacticComponent,
    TacticHomeComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:44346"],
        blacklistedRoutes: []
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
