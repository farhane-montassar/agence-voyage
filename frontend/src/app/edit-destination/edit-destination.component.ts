import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

import { DestinationService } from '../services/destination.service';

@Component({
  selector: 'app-edit-destination',
  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule
  ],

  templateUrl: './edit-destination.component.html',
  styleUrl: './edit-destination.component.css'
})

export class EditDestinationComponent implements OnInit {

  formDestination!: FormGroup;

  idDestination: any;

  constructor(
    private fb: FormBuilder,
    private destinationService: DestinationService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.formDestination = this.fb.group({

      nom: ['', Validators.required],
      pays: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required]

    });

    this.idDestination = this.activatedRoute.snapshot.paramMap.get('id');
console.log('ID destination:', this.idDestination);

    this.destinationService
      .getDestinationById(this.idDestination)
      .subscribe({

        next: (data: any) => {

          this.formDestination.patchValue(data);

        },

        error: (err) => {

          console.log(err);

        }

      });

  }

  submit(): void {

    this.destinationService
      .updateDestination(
        this.idDestination,
        this.formDestination.value
      )
      .subscribe({

        next: () => {

          alert('Destination modifiée');

          this.router.navigate(['/destinations']);

        },

        error: (err) => {

          console.log(err);

        }

      });

  }

}