import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';
import { FormGroup, FormControl, Validators, } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  formulario: FormGroup;
  urlAcortado: string;
  bandera: boolean;
  patron = '^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$';
  constructor(private conexion: ConexionService) {
    this.validacion();
  }

  ngOnInit(): void {
  }
  onSubmit(value: FormGroup): boolean {
    console.log(value);
    if (value.status === 'VALID') {
      this.getSrc(value.value.busqueda);
      this.bandera = false;
      return this.bandera;
    } else {
      this.bandera = true;
      return true;
    }
  }

  getSrc(value: string): void {
    const resulObser$ = this.conexion.postLink(value);
    resulObser$.subscribe((val: any) => {
      console.log(`https://rel.ink/${val.hashid}`);
      return this.urlAcortado = `https://rel.ink/${val.hashid}`;
    });
  }

  validacion(): void {
    this.formulario = new FormGroup({
      busqueda: new FormControl('', [Validators.required, Validators.pattern(this.patron)])
    });

  }
}
