import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface UrlParams {
  userID: string
}

@Component({
  selector: 'app-admin-management',
  templateUrl: './admin-management.component.html',
  styleUrls: ['./admin-management.component.css']
})
export class AdminManagementComponent implements OnInit {

  queryParams: any

  constructor(private route: ActivatedRoute) {}
  
  ngOnInit(): void {}
  
}
