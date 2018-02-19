import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SongsListComponent} from './songs-list/songs-list.component';
import {SongsDetailsComponent} from './songs-details/songs-details.component';
import { SongsTopComponent } from './songs-top/songs-top.component';
import { AppConfig } from '../config/app.config';

const musicRoutes: Routes = [
      {path: '', component: SongsTopComponent, pathMatch: 'full' },
      {path:  'list', component: SongsListComponent},
      {path:  'detail/:id', component: SongsDetailsComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(musicRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class MusicRoutingModule {
}
