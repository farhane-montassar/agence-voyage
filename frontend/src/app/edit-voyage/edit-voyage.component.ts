import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

import { VoyageService } from '../services/voyage.service';
import { DestinationService } from '../services/destination.service';

@Component({
  selector: 'app-edit-voyage',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-voyage.component.html',
  styleUrl: './edit-voyage.component.css'
})
export class EditVoyageComponent implements OnInit {

  formVoyage!: FormGroup;

  idVoyage!: string;

  listDestination: any[] = [];

  constructor(
    private fb: FormBuilder,
    private voyageService: VoyageService,
    private destinationService: DestinationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.formVoyage = this.fb.group({
      titre: ['', Validators.required],
      prix: ['', Validators.required],
      duree: ['', Validators.required],
      dateDepart: ['', Validators.required],
      description: ['', Validators.required],
      destination: ['', Validators.required]
    });

    this.idVoyage = this.route.snapshot.params['id'];

    console.log('ID Voyage:', this.idVoyage);

    this.getVoyage();

    this.getDestinations();
  }

  getDestinations(): void {

    this.destinationService.getDestinations().subscribe({
      next: (data: any) => {
        this.listDestination = data;
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

  getVoyage(): void {

    this.voyageService.getVoyageById(this.idVoyage).subscribe({

      next: (data: any) => {

        console.log('Voyage reçu:', data);

        this.formVoyage.patchValue({

          titre: data.titre,
          prix: data.prix,
          duree: data.duree,
          dateDepart: data.dateDepart
            ? data.dateDepart.substring(0, 10)
            : '',

          description: data.description,

          destination:
            data.destination?._id || data.destination

        });

      },

      error: (err) => {
        console.log(err);
      }

    });

  }

  submit(): void {

    this.voyageService
      .updateVoyage(this.idVoyage, this.formVoyage.value)
      .subscribe({

        next: () => {

          alert('Voyage modifié');

          this.router.navigate(['/voyages']);

        },

        error: (err) => {
          console.log(err);
        }

      });

  }

}