import {Component} from '@angular/core';
import {Song} from '../../music/shared/song.model';
import {FormControl} from '@angular/forms';
import {MusicService} from '../../music/shared/music.service';
import {Router} from '@angular/router';
import {AppConfig} from '../../config/app.config';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})

export class SearchBarComponent {
  defaultSongs: Array<Song> = [];
  songFormControl: FormControl;
  filteredSongs: any;
  songsAutocomplete: any;

  constructor(private musicService: MusicService,
              private router: Router) {
    this.songFormControl = new FormControl();

    this.musicService.getAllSongs().subscribe((songs: Array<Song>) => {
      this.defaultSongs = songs;

      this.songFormControl.valueChanges
        .startWith(null)
        .map(value => this.filterSongs(value))
        .subscribe(songsFiltered => {
          this.filteredSongs = songsFiltered;
        });
    });
  }

  filterSongs(val: string): Song[] {
    return val ? this.defaultSongs.filter(song => song.name.toLowerCase().indexOf(val.toLowerCase()) === 0)
      : this.defaultSongs;
  }

  searchSong(song: Song): Promise<boolean> {
    return this.router.navigate([AppConfig.routes.songs + '/detail/' + song.id]);
  }
}
