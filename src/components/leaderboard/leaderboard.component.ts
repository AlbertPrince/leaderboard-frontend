import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { CodewarsLeaderboardService } from 'src/app/services/codewars-leaderboard.service';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

/** Constants used to fill up our data base. */


/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'table-overview-example',
  styleUrls: ['leaderboard.component.scss'],
  templateUrl: 'leaderboard.component.html',
})
export class LeaderboardComponent implements AfterViewInit {
  displayedColumns: string[] = ['username', 'name', 'clan', 'honour', 'languages', 'overall_rank'];
  dataSource!: MatTableDataSource<UserData>;
  dataSources : any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @Input() filter : string = ""

  constructor(private codewarsLeaderboardService:CodewarsLeaderboardService) {

  }
  mainlist = []
  list = []
  ngOnInit(){
    this.codewarsLeaderboardService.getLeaderboardApi().subscribe(value => {
      console.log(value)
      this.mainlist = value
      this.list = value
      this.dataSources = value;
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filter:string) {
    this.list = this.mainlist.filter(e=>String (e["languages"][0]["name"]).includes(filter))
    this.dataSources = this.list
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

