import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game } from '../../interfaces/interfaces';

@Component({
    selector: 'app-games',
    templateUrl: './games.component.html',
    styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

    games: Game[] = [];

    constructor(private _serviceGames: GameService) {
        this._serviceGames.getGames()
            .subscribe(games => {
                console.log(games)
                this.games = games;
            })
    }

    ngOnInit() {
    }

}
