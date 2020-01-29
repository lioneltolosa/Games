import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game } from '../../interfaces/interfaces';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-games',
    templateUrl: './games.component.html',
    styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

    games: Game[] = [];

    constructor(private _serviceGames: GameService) {}

    ngOnInit() {
        this._serviceGames.getGames()
            .subscribe(games => {
                console.log(games)
                this.games = games;
            })
    }

    votesGames(game: Game) {
        this._serviceGames.votesGames(game.id)
            .subscribe( (resp: {ok: boolean, mensaje: string}) => {
                
                if( resp.ok) {
                    Swal.fire('Thanks!!', resp.mensaje, 'success')
                } else {
                    Swal.fire('Error', resp.mensaje, 'error')
                }
            })
        //console.log(games)
    }
}
