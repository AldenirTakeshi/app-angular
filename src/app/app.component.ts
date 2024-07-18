import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  title = "Minha primeira aplição Angular";
  states:any[] = []
  cities:any[] = []
  selectedState: string = ''

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getStates().subscribe(
      (response) => {
        this.states = response;
      },
      (error) => {
        console.error('Erro ao obter estados', error);
      }
    );
  }

  onStateChange(): void {
    this.dataService.getCities(this.selectedState).subscribe(
      (response) => {
        this.cities = response;
      },
      (error) => {
        console.error('Erro ao obter cidades', error);
      }
    );
  }

}
