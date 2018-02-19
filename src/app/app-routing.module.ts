import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppConfig} from './config/app.config';
import {Error404Component} from './core/error404/error-404.component';
import { SongsTopComponent } from './music/songs-top/songs-top.component';

const routes: Routes = [
  {path: '', redirectTo: '/' + AppConfig.routes.songs, pathMatch: 'full' },
  {path: AppConfig.routes.songs, loadChildren: 'app/music/music.module#MusicModule'},
  {path: AppConfig.routes.error404, component: Error404Component},

  // otherwise redirect to 404
  {path: '**', redirectTo: '/' + AppConfig.routes.error404}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
