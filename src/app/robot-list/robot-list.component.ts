import { Component } from '@angular/core';
import { RepositoryService, Robot } from '../repository.service';

@Component({
  selector: 'app-robot-list',
  templateUrl: './robot-list.component.html',
  styleUrls: ['./robot-list.component.css'],
})
export class RobotListComponent {
  services = new RepositoryService();
  robots: Robot[] = [];

  // No sé por qué funciona cuando lo meto dentro del constructor
  constructor() {
    this.services.getAll().then((robots) => {
      this.robots = robots;
    });
  }
}
