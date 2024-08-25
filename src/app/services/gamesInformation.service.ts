import { Injectable } from '@angular/core';
import { GameProfile } from '../../shared/model/gameProfile';


@Injectable({
  providedIn: 'root'
})
export class GameProfileService {
  private games: GameProfile[] = [
    new GameProfile(1, 'Mixed Letters', 'Mixed Letters game', 'mixedlettersgame/:id'),
    new GameProfile(2, 'Maching Letters', 'Word Maching game', 'machinggame/:id')
  ];

  constructor() {}

  getGames(): GameProfile[] {
    return this.games;
  }
}