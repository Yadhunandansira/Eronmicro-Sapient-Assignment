import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-side-filter-bar',
  templateUrl: './side-filter-bar.component.html',
  styleUrls: ['./side-filter-bar.component.css']
})
export class SideFilterBarComponent implements OnInit {

  years = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
  
  filterData = {
    year: null,
    isLaunchSuccess: null,
    isLandingSuccess: null
  }
  isFilter = false;

  constructor(private _appService: AppService) { }

  ngOnInit(): void {
  }

  // Apply filter
  fnApplyFilter(param, value) {
    this.isFilter = true;
    this.filterData[param] = value;
    this._appService.onFilterDataChanged.next(this.filterData);
  }

  // Clear applied filter
  fnClearFilter() {
    this.isFilter = false;;

    this.filterData = {
      year: null,
      isLaunchSuccess: null,
      isLandingSuccess: null
    }

    this._appService.onFilterDataChanged.next(this.filterData);

  }
}
