import { Component } from '@angular/core';
import { StatisticsServiceService } from 'app/@core/services/apis/statistics.service';

export interface Statistics{
  id: number;
  month : number;
  revenue: number;
}
@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.scss']
})
export class RevenueComponent {
  listStatistics: any;
  
constructor(
  private statistics: StatisticsServiceService,
){}
ngOnInit(): void {
this.getStatistics();
}
getStatistics(){
  this.statistics.getStatistics().subscribe(res =>{
    this.listStatistics = res.data;
    console.log(this.listStatistics);
  })
}
}
