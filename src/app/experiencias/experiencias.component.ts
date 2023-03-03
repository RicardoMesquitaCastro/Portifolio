import { Component, OnInit} from '@angular/core';
import { Experiencias } from '../models/experiências';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {

  public experiencia!: Experiencias

  ngOnInit(): void{       

  }

}
