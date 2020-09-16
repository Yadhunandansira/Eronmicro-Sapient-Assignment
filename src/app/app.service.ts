import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { resolve } from 'dns';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  baseUrl:string = 'https://api.spaceXdata.com/v3/launches?limit=100';

  onSpaceXDataChanged: BehaviorSubject<any> = new BehaviorSubject(null);
  onFilterDataChanged: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private _http: HttpClient) {
   }


  //  Get spacexdata from API
  fnGetSpaceXData(filterData?) {

    var url = this.baseUrl;

    // Set url based on filter data
    if(filterData){
      if (filterData.isLaunchSuccess !== null && filterData.isLaunchSuccess !== undefined) {
        url = url + '&launch_success=' + filterData.isLaunchSuccess;
      }
      if (filterData.isLandingSuccess !== null && filterData.isLandingSuccess !== undefined) {
        url = url + '&land_success=' + filterData.isLandingSuccess;
      }
      if (filterData.year) {
        url = url + '&launch_year=' + filterData.year;
      }
    }

    return new Promise((resolve, reject) => {
      this._http.get(url).subscribe((response: any) => {
        if (response) {
          this.onSpaceXDataChanged.next(response);
          resolve(response);
        }
      }, err => {
        resolve(false);
        throw err;
      })
    });

  }
}
