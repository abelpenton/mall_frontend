import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {AppConfig} from '../../config/app.config';

import {Song} from './song.model';
import {Observable} from 'rxjs/Observable';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {TranslateService} from '@ngx-translate/core';
import 'rxjs/add/observable/of';
@Injectable()
export class MusicService {
  private headers: HttpHeaders;
  private translations: any;
  private len = 11;
  private UserVoto = 20;
  private data: Song[] = [
    {
      id: 1,
      name: 'Silent Love',
      album: 'NAMR GILL',
      imageAlbum: './../../../assets/images/music/11.jpg',
      likes: 5
    },
    {
      id: 2,
      name: 'Dheere',
      album: 'ZACK KNIGHT',
      imageAlbum: './../../../assets/images/music/22.jpg',
      likes: 4
    },
    {
      id: 3,
      name: 'NAKHRE',
      album: 'ZACK KNIGHT',
      imageAlbum: './../../../assets/images/music/33.jpg',
      likes: 2
    },
    {
      id: 4,
      name: 'Subeme la Radio',
      album: 'RelaseEnrique',
      imageAlbum: './../../../assets/images/music/v2.jpg',
      likes: 5
    },
    {
      id: 5,
      name: 'STUCK FEELING',
      album: 'Prince Royce',
      imageAlbum: './../../../assets/images/music/v4.jpg',
      likes: 5
    },
    {
      id: 6,
      name: 'MR PUTT DOWN',
      album: 'RICK Feat Pitbull',
      imageAlbum: './../../../assets/images/music/v5.jpg',
      likes: 6
    },
    {
      id: 7,
      name: 'FifTY SHADES',
      album: 'Grey',
      imageAlbum: './../../../assets/images/music/v6.jpeg',
      likes: 7
    },
    {
      id: 8,
      name: 'Soledad',
      album: 'YOAN',
      imageAlbum: './../../../assets/images/music/v7.jpg',
      likes: 8
    },
    {
      id: 9,
      name: 'Alan Jackson',
      album: 'Precious Memories',
      imageAlbum: './../../../assets/images/music/v9.jpg',
      likes: 5

    },
    {
      id: 10,
      name: 'Selah',
      album: 'you amaze us',
      imageAlbum: './../../../assets/images/music/v33.jpg',
      likes: 1
    },
    {
      id: 11,
      name: 'Party Night',
      album: 'Album1',
      imageAlbum: './../../../assets/images/music/v55.jpg',
      likes: 9
    }

];
  private handleError(error: any) {
    if (error instanceof Response) {
      return Observable.throw(error.json()['error'] || 'backend server error');
    }
    return Observable.throw(error || 'backend server error');
  }

  constructor(private http: HttpClient,
              private translateService: TranslateService,
              private snackBar: MatSnackBar) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});

    this.translateService.get(['songCreated', 'saved', 'songLikeMaximum', 'songRemoved'], {
      'value': AppConfig.votesLimit
    }).subscribe((texts) => {
      this.translations = texts;
    });
  }

  getAllSongs(): Observable<Song[]> {
    console.log('asdasdsad');
    return Observable.of(this.data);
  }

  getSongById(songId: number): Observable<Song> {
     return Observable.of(this.data.find((data) => data.id === songId));
  }
  createSong(song: Song) {
    song.id = this.data.length + 1;
    this.data.push(song);
  }
  like(song: Song) {
    if (this.checkIfUserCanVote()) {
      const songF = this.data.find((data) => data === song);
      songF.likes++;
      this.data = this.data.sort((a, b) => {
        return b.likes - a.likes === 0 ? a.id - b.id : b.likes - a.likes;
      });
      this.showSnackBar('saved');
      return Observable.of(songF);
    }
  }

  checkIfUserCanVote(): boolean {
    return true;
  }

  showSnackBar(name): void {
    const config: any = new MatSnackBarConfig();
    config.duration = AppConfig.snackBarDuration;
    this.snackBar.open(this.translations[name], 'OK', config);
  }
}
