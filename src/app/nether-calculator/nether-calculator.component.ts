import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nether-calculator',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './nether-calculator.component.html',
  styleUrl: './nether-calculator.component.scss'
})
export class NetherCalculatorComponent {
  overworldX!: number;
  overworldZ!: number;
  netherX!: number;
  netherZ!: number;

  calculateNetherCoordinates() {
    // Conversion ratio from overworld to nether is 8:1
    this.netherX = Math.floor(this.overworldX / 8);
    this.netherZ = Math.floor(this.overworldZ / 8);
  }

  calculateOverworldCoordinates() {
    // Conversion ratio from nether to overworld is 1:8
    this.overworldX = this.netherX * 8;
    this.overworldZ = this.netherZ * 8;
  }
}
