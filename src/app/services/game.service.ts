import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Game } from '../interfaces/interfaces';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class GameService {

    private juegos: Game[] = [];

    constructor(private http: HttpClient) { }

    getGames() {
        if( this.juegos.length > 0) {
            // No tenemos juegos
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
}
