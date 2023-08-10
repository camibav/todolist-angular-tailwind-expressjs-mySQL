import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../services/connect.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-todolistview',
  templateUrl: './todolistview.component.html',
  styleUrls: ['./todolistview.component.css']
})
export class TodolistviewComponent implements OnInit {
  dataFromApi: any[] = [];
  paginaActual: number = 1;
  itemPorPagina: number = 5;
  paginasTotales: number = 1;

  constructor(private connectService: ConnectService, private router: Router ) { }

  ngOnInit(): void {
    this.getDataFromAPI();
  }
  ngOnChanges(): void {
    this.getDataFromAPI();


  }

  private getDataFromAPI(): void {
    this.connectService.getDataFromAPI().subscribe((data: any[]) => {
      this.dataFromApi = data;
      this.paginasTotales = Math.ceil(this.dataFromApi.length / this.itemPorPagina);
    });
  }
  eliminarTarea(id: number) {
    this.connectService.eliminarTarea(id).subscribe((data: any[]) => {
      this.getDataFromAPI();
    });

  }
  editarTarea(id:number) {
    this.router.navigate(['/editar'+'/'+id]);
  }
  Realizarpagination(): any[]{
    const indexInicial= (this.paginaActual - 1) * this.itemPorPagina;
    const indexFinal= indexInicial + this.itemPorPagina;
    return this.dataFromApi.slice(indexInicial,indexFinal);

  }

  obtenerTotalPag(): number[] {
    return new Array(this.paginasTotales).fill(0).map((_, index) => index);
  }
  cambioDePagina(pagina: number){
console.log('Página actual:', pagina);
    this.paginaActual = pagina;


  }
}

