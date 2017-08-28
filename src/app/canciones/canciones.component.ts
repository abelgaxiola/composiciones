import { Component, OnInit } from '@angular/core';
import { CancionesService } from './../canciones.service';
import { Song } from './../song';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.scss']
})
export class CancionesComponent implements OnInit {
  songs: Song[];
  songType = 'noneSelected';
  errorMessage: string;

  constructor(private cancionesService: CancionesService) { }

  ngOnInit() {
    this.cancionesService.getSongs()
      .subscribe(songs => this.songs = songs,
      error => this.errorMessage = <any>error);
  }

  songTypeSelected(type: string) {
    this.songType = type;
  }
}
