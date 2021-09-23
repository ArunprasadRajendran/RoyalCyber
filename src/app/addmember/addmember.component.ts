import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TeammembersComponent } from '../teammembers/teammembers.component';

@Component({
  selector: 'app-addmember',
  templateUrl: './addmember.component.html',
  styleUrls: ['./addmember.component.scss']
})
export class AddmemberComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TeammembersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  update() {
    console.log('Member updated');
    this.dialogRef.close();
  }

  save() {
    console.log('Member added');
    this.dialogRef.close();
  }
}
