import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-plant-observation-invasive-plant-species-cell',
  templateUrl: './add-plant-observation-invasive-plant-species-cell.component.html',
  styleUrls: ['./add-plant-observation-invasive-plant-species-cell.component.css']
})
export class AddPlantObservationInvasivePlantSpeciesCellComponent implements OnInit {

  items: string[] = [`one`, `two`];

  constructor() { }

  ngOnInit() {
  }

  dropdownSelectionChanged(value: string) {
    console.log(value)
  }

  invasivePlantSpeciesChanged(value: string) {
    console.log(value);
  }

  jurisdictionChanged(value: string) {
    console.log(value);
  }

  densityChanged(value: string) {
    console.log(value);
  }

  distributionChanged(value: string) {
    console.log(value);
  }

  surveyModeChanged(value: string) {
    console.log(value);
  }

  soilTextureCodeChanged(value: string) {
    console.log(value);
  }

  specificUseCodeChanged(value: string) {
    console.log(value);
  }

}
