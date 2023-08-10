import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConnectService {
  private apiUrl = 'http://localhost:3000/homework'; // Cambia esta URL según corresponda

  constructor(private http: HttpClient) { }

  getDataFromAPI(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error al obtener datos desde la API:', error);
        return [];
      })
    );
  }
  obtenerUnaTarea(id:number): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl +'/'+ id).pipe(
      catchError((error) => {
        console.error('Error al obtener datos desde la API:', error);
        return [];
      })
    );
  }

  crearTarea(task:string,date:string): Observable<any[]> {
    const requestData = { tarea: task, fecha: date };
    return this.http.post<any[]>(this.apiUrl, requestData).pipe(
      catchError((error) => {
        console.error('Error al enviar datos a la API:', error);
        return [];
      })
    );
  }

  eliminarTarea(id:number): Observable<any[]> {
    return this.http.delete<any[]>(this.apiUrl +'/'+ id).pipe(
      catchError((error) => {
        console.error('Error al eliminar datos desde la API:', error);
        return [];
      })
    );
  }
  editarTarea(id:number,task:string,date:string): Observable<any[]> {
    const requestData = { tarea: task, fecha: date };
    return this.http.put<any[]>(this.apiUrl +'/'+ id, requestData).pipe(
      catchError((error) => {
        console.error('Error al editar datos desde la API:', error);
        return [];
      })
    )
  }
}
