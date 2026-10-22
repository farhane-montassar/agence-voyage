import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { VoyageService } from '../services/voyage.service';
import { DestinationService } from '../services/destination.service';

@Component({
  selector: 'app-ajout-voyage',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ajout-voyage.component.html',
  styleUrl: './ajout-voyage.component.css'
})
export class AjoutVoyageComponent implements OnInit {

  formVoyage!: FormGroup;
  listDestination: any[] = [];

  constructor(
    private fb: FormBuilder,
    private voyageService: VoyageService,
    private destinationService: DestinationService,
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

    this.loadDestinations();
  }

  loadDestinations(): void {
    this.destinationService.getDestinations().subscribe({
      next: (data: any) => {
        this.listDestination = data;
        console.log('Destinations:', data);
      },
      error: (err) => {
        console.log('Erreur destinations:', err);
      }
    });
  }

  submit(): void {
  console.log(this.formVoyage.value);

  if (this.formVoyage.invalid) {
    alert('Remplir tous les champs');
    return;
  }

  this.voyageService.postVoyage(this.formVoyage.value).subscribe({
    next: () => {
      alert('Voyage ajouté avec succès');
      this.router.navigate(['/voyages']);
    },
    error: (err) => {
      console.log(err);
      alert('Erreur ajout voyage');
    }
  });
}
}