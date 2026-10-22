import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { Router } from '@angular/router';

import { DestinationService } from '../services/destination.service';

@Component({
  selector: 'app-ajout-destination',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ajout-destination.component.html',
  styleUrl: './ajout-destination.component.css'
})
export class AjoutDestinationComponent {

  formDestination!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private destinationService: DestinationService,
    private router: Router
  ) {

    this.formDestination = this.fb.group({

      nom: ['', Validators.required],

      pays: ['', Validators.required],

      description: ['', Validators.required],

      image: ['', Validators.required]

    });

  }

  submit(): void {

    console.log(this.formDestination.value);

    if(this.formDestination.invalid) {

      alert('Remplir tous les champs');

      return;

    }

    this.destinationService
      .postDestination(this.formDestination.value)

      .subscribe({

        next: () => {

          alert('Destination ajoutée');

          this.router.navigate(['/destinations']);

        },

        error: (err) => {

          console.log(err);

        }

      });

  }

}