import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {

  

  optionsList = [{
    name: "Yes", value: 1
  }, {
    name: "No", value: 1
  }
  ]


}
