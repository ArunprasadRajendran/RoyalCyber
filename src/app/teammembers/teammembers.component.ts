import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddmemberComponent } from './addmember/addmember.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

export interface PeriodicElement {
  name: string;
  role: string;
  mobileNumber: string;
  addedOn: string;
  addedBy: string;
  status: string;
  actions: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Arun Prasad', role: 'Team Member', mobileNumber: '+91 9789117240', addedOn: '10/06/21', addedBy: 'James Bond', status: 'Pending', actions: '' },
  { name: 'Kumaresan', role: 'Admin', mobileNumber: '+91 9789117240', addedOn: '10/06/21', addedBy: 'James Bond', status: 'Accepted', actions: '' },
  { name: 'Arun Prasad', role: 'Team Member', mobileNumber: '+91 9789117240', addedOn: '10/06/21', addedBy: 'James Bond', status: 'Pending', actions: '' },
  { name: 'Kumaresan', role: 'Admin', mobileNumber: '+91 9789117240', addedOn: '10/06/21', addedBy: 'James Bond', status: 'Expired', actions: '' },
  { name: 'Arun Prasad', role: 'Team Member', mobileNumber: '+91 9789117240', addedOn: '10/06/21', addedBy: 'James Bond', status: 'Pending', actions: '' },
  { name: 'Kumaresan', role: 'Admin', mobileNumber: '+91 9789117240', addedOn: '10/06/21', addedBy: 'James Bond', status: 'Accepted', actions: '' },
  { name: 'Arun Prasad', role: 'Team Member', mobileNumber: '+91 9789117240', addedOn: '10/06/21', addedBy: 'James Bond', status: 'Pending', actions: '' },
  { name: 'Kumaresan', role: 'Admin', mobileNumber: '+91 9789117240', addedOn: '10/06/21', addedBy: 'James Bond', status: 'Pending', actions: '' },
  { name: 'Arun Prasad', role: 'Team Member', mobileNumber: '+91 9789117240', addedOn: '10/06/21', addedBy: 'James Bond', status: 'Accepted', actions: '' },
  { name: 'Kumaresan', role: 'Admin', mobileNumber: '+91 9789117240', addedOn: '10/06/21', addedBy: 'James Bond', status: 'Pending', actions: '' },
  { name: 'Arun Prasad', role: 'Team Member', mobileNumber: '+91 9789117240', addedOn: '10/06/21', addedBy: 'James Bond', status: 'Expired', actions: '' },
  { name: 'Kumaresan', role: 'Admin', mobileNumber: '+91 9789117240', addedOn: '10/06/21', addedBy: 'James Bond', status: 'Pending', actions: '' },
];

@Component({
  selector: 'app-teammembers',
  templateUrl: './teammembers.component.html',
  styleUrls: ['./teammembers.component.scss']
})
export class TeammembersComponent implements OnInit {

  displayedColumns: string[] = ['name', 'role', 'mobileNumber', 'addedOn', 'addedBy', 'status', 'actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  editMember(element) {
    console.log(element);
    let dialogRef = this.dialog.open(AddmemberComponent, {
      height: '580px',
      width: '500px',
      data: element
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  addMember() {
    let dialogRef = this.dialog.open(AddmemberComponent, {
      height: '550px',
      width: '500px',
      data: ''
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  status(status) {
    if (status == 'Pending')
      return { background: '#f7f753' };
    else if (status == 'Accepted')
      return { background: '#008000b8' };
    else if (status == 'Expired')
      return { background: '#ff0000a3' };
    else
      return { background: 'grey' };
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

}
