import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-table-info',
  templateUrl: './table-info.component.html',
  styleUrls: ['./table-info.component.css']
})
export class TableInfoComponent implements OnInit {

  totalUsers: number = 0

  constructor( private userService: UserService) { }

  ngOnInit(): void {
    this.userService.totalUsers.subscribe((total: number) => {
      this.totalUsers=total;
    });
  }



}
