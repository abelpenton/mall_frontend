import {Component} from '@angular/core';
import {Song} from '../shared/song.model';
import {MusicService} from '../shared/music.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-songs-details',
  templateUrl: './songs-details.component.html',
  styleUrls: ['./songs-details.component.scss']
})
export class SongsDetailsComponent {
  song: Song;
  canVote: boolean;

  constructor(private musicService: MusicService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params: any) => {
      if (params['id']) {
        this.musicService.getSongById(+params['id']).subscribe((song: Song) => {
          this.song = song;
        });
      }
    });
  }

  like() {
    return new Promise((resolve, reject) => {
      this.musicService.like(this.song).subscribe(() => {
        this.canVote = this.musicService.checkIfUserCanVote();
        resolve(true);
      }, (error) => {
        reject(error);
      });
    });
  }

}
