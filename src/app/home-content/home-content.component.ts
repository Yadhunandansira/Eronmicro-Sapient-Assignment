import { Component, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit {

  onSpaceXDataChanged:Subscription;
  onFilterDataChanged:Subscription;
  missionData = [];
  constructor(private _appService:AppService) { }


  ngOnInit(): void {

    this.onSpaceXDataChanged = this._appService.onSpaceXDataChanged.subscribe((response:any)=>{
      if(response ){
        this.missionData = response;
      }
    })

    this.onFilterDataChanged = this._appService.onFilterDataChanged.subscribe((data:any)=>{
      this._appService.fnGetSpaceXData(data);
    })
  }

}
