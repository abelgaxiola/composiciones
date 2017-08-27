import { Component, OnInit } from '@angular/core';
import { CancionesService } from './../canciones.service';
import { Cancion } from './../cancion';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.scss']
})
export class CancionesComponent implements OnInit {
  canciones: Cancion[];
  songType = 'noneSelected';
  errorMessage: string;

  constructor(private cancionesService: CancionesService) { }

  ngOnInit() {
    this.cancionesService.getSongs()
      .subscribe(canciones => this.canciones = canciones,
      error => this.errorMessage = <any>error);
  }

  songTypeSelected(type: string) {
    this.songType = type;
  }
}
