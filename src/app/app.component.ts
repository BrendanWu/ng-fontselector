import { Component } from '@angular/core';
import { FontDialogComponent } from './components/font-dialog/font-dialog.component';
import { MatDialog } from '../../node_modules/@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dialog: MatDialog) {

  }
  openDialog(): void {
    const dialogRef = this.dialog.open(FontDialogComponent, {
      width: '500',
      panelClass: 'custom-dialog-container',
      data: {
        "font_family": "Comic Sans",
        "font_style": "Bold",
        "size": 10,
        "font_spacing": 5
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(dialogRef.componentInstance.fontSettings);
      console.log('The dialog was closed');

    });
  }

}
