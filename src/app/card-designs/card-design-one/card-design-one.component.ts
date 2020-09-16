import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-design-one',
  templateUrl: './card-design-one.component.html',
  styleUrls: ['./card-design-one.component.scss']
})
export class CardDesignOneComponent implements OnInit {

  // card details from parent component
  @Input() data:any;

  constructor() {

   }

  ngOnInit(): void {
  }

}
