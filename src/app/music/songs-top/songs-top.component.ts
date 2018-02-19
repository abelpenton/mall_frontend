import {Component} from '@angular/core';

import {Song} from '../shared/song.model';

import {MusicService} from '../shared/music.service';
import {AppConfig} from '../../config/app.config';

@Component({
  selector: 'app-songs-top',
  templateUrl: './songs-top.component.html',
  styleUrls: ['./songs-top.component.scss']
})
export class SongsTopComponent {

  songs: Song[] = null;
  canVote = false;

  constructor(private musicService: MusicService) {
    this.canVote = this.musicService.checkIfUserCanVote();

    this.musicService.getAllSongs().subscribe((songs) => {
      this.songs = songs.sort((a, b) => {
        return b.likes - a.likes;
      }).slice(0, AppConfig.topSongsLimit);
    });
  }

  like(song: Song): Promise<any> {
    return new Promise((resolve, reject) => {
      this.musicService.like(song).subscribe(() => {
        this.canVote = this.musicService.checkIfUserCanVote();
        resolve(true);
      }, (error) => {
        reject(error);
      });
    });
  }

}
