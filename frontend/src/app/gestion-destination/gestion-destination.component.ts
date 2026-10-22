import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { DestinationService,  } from '../services/destination.service';

@Component({
  selector: 'app-gestion-destination',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './gestion-destination.component.html',
  styleUrl: './gestion-destination.component.css'
})
export class GestionDestinationComponent implements OnInit {

  listDestination: any[] = [];

  constructor(
    private destinationService: DestinationService
  ) {}

  ngOnInit(): void {

    this.getAllDestinations();

  }

  getAllDestinations(): void {

    this.destinationService.getDestinations().subscribe({

      next: (data: any) => {

        this.listDestination = data;

      },

      error: (err) => {

        console.log(err);

      }

    });

  }

  deleteDestination(id: string): void {
  if (confirm('Supprimer destination ?')) {
    this.destinationService.deleteDestination(id).subscribe({
      next: () => {
        alert('Destination supprimée');
        this.getAllDestinations();
      },
      error: (err) => {
        console.log(err);
        alert('Erreur suppression');
      }
    });
  }
}
  

}