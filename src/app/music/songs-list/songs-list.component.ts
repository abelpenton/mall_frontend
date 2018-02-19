import {Component, ViewChild} from '@angular/core';
import {Song} from '../shared/song.model';
import {MusicService} from '../shared/music.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {AppConfig} from '../../config/app.config';
import {Router} from '@angular/router';
import {LoggerService} from '../../core/logger.service';
@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss']
})
export class SongsListComponent {

  songs: Song[];
  newSongForm: FormGroup;
  canVote = false;
  error: string;
  total = 11;
  @ViewChild('form') myNgForm; // just to call resetForm method

  constructor(private musicService: MusicService,
              private dialog: MatDialog,
              private router: Router,
              private formBuilder: FormBuilder) {

    this.newSongForm = this.formBuilder.group({
      'name': ['', [Validators.required]],
      'album': ['', [Validators.required]]
    });

    this.musicService.getAllSongs().subscribe((songs: Array<Song>) => {
      this.songs = songs.sort((a, b) => {
        return b.likes - a.likes === 0 ? a.id - b.id : b.likes - a.likes;
      });
    });
  }

  like(song: Song) {
    this.musicService.like(song).subscribe(() => {
      this.canVote = this.musicService.checkIfUserCanVote();
    }, (error: Response) => {
      LoggerService.error('maximum votes limit reached', error);
    });
  }

  createNewSong(newSong: Song) {
    newSong.imageAlbum = '../../../assets/images/music/22.jpg';
    newSong.likes = 1;
    this.musicService.createSong(newSong);
    this.myNgForm.resetForm();
  }

  seeSongDetails(song): void {

  this.router.navigate([AppConfig.routes.songs + '/' + song.id]);
  }

}
