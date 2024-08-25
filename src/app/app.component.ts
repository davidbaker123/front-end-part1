import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HelpComponent } from './help/help.component';
import { ChooseGameComponent } from './chooseGame/chooseGame.component';
import { MixedLettersGameComponent } from './mixed-letters-game/mixed-letters-game.component';
import { MachingGameComponent } from './maching-game/maching-game.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, FooterComponent, HeaderComponent,DashboardComponent,HelpComponent,ChooseGameComponent,MixedLettersGameComponent,MachingGameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'little-linguist';
}
