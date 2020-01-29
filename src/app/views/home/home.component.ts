import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Game } from 'src/app/interfaces/interfaces';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    games: any[] = [];

    constructor(private bd: AngularFirestore) { }

    ngOnInit() {
        this.bd.collection('games').valueChanges()
            .pipe(
                map((resp: Game[]) => {
                    // return resp.map(({ name, votes }) => ({ name, value: votes }))

                    return resp.map( games => {
                        return {
                            name: games.name,
                            value: games.votes,
                            conchita: 'Hola conchita'
                        }
                    })
                })
            )
            
            .subscribe(games => {
                console.log(games)
                this.games = games;
            })
    }
}
