import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Game } from '../interfaces/interfaces';
import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class GameService {

    private juegos: Game[] = [];

    constructor(private http: HttpClient) { }

    getGames() {
        if( this.juegos.length > 0) {   // Si no tenemos juegos has esto
            console.log('Desde cache');
            return of( this.juegos )
        } else {
            console.log('Desde el Get http');
            return this.http.get<Game[]>(`${environment.url}/api/games`)
                .pipe(
                    tap(juegos => {
                        this.juegos = juegos
                    })
                )
        }
    }

    votesGames( id: number ) {
       return this.http.post(`${environment.url}/api/games/${id}`, {})
            .pipe(
                catchError( err => {
                    console.log('Error en la Peticion');
                    return of(err.error);
                })
            )
    }
}
