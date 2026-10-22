import { Component, OnInit } from '@angular/core';
import { VoyageService } from '../services/voyage.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-gestion-voyage',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './gestion-voyage.component.html',
  styleUrl: './gestion-voyage.component.css'
  
})
export class GestionVoyageComponent implements OnInit {

  listVoyage: any[] = [];

  constructor(private voyageService: VoyageService) {}

  ngOnInit(): void {
    this.getAllVoyages();
  }

  getAllVoyages() {
    this.voyageService.getVoyages().subscribe(
      (res: any) => {
        this.listVoyage = res;
        console.log(res);
      },
      err => console.log(err)
    );
  }
  deleteVoyage(voyage: any): void {
  if (confirm('Voulez-vous supprimer ce voyage ?')) {
    this.voyageService.deleteVoyage(voyage.id).subscribe(
      () => {
        const index = this.listVoyage.indexOf(voyage);
        if (index !== -1) {
          this.listVoyage.splice(index, 1);
        }
      },
      err => console.log(err)
    );
  }
}
}