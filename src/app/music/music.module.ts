import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MusicRoutingModule} from './music-routing.module';
import {SharedModule} from '../shared/modules/shared.module';

import {SongsListComponent} from './songs-list/songs-list.component';
import {MusicService} from './shared/music.service';
import {SongsDetailsComponent} from './songs-details/songs-details.component';
import { SongsTopComponent } from './songs-top/songs-top.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MusicRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
   // MusicComponent,
    SongsListComponent,
    SongsDetailsComponent,
    SongsTopComponent
  ],
  entryComponents: [
  ],
  providers: [
    MusicService
  ]
})

export class MusicModule {
}
