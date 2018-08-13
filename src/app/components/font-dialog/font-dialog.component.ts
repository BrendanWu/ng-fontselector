import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '../../../../node_modules/@angular/material';
import { Http } from '../../../../node_modules/@angular/http';
import { map } from "rxjs/operators";
import { FontSettings } from "../../models/font-settings";


@Component({
  selector: 'app-font-dialog',
  templateUrl: './font-dialog.component.html',
  styleUrls: ['./font-dialog.component.css']
})
export class FontDialogComponent implements OnInit {

  fonts: any[];
  fontSettings: FontSettings;



  constructor(public dialogRef: MatDialogRef<FontDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, private http: Http){
    this.fontSettings = new FontSettings;
    this.fontSettings.font_family = data.font_family;
    this.fontSettings.font_spacing = data.font_spacing;
    this.fontSettings.font_style = data.font_style;
    this.fontSettings.size = data.size;
   }

  ngOnInit() {
    
    var googleFonts = this.http.get("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCo0RYfRswDkBZbCnJXAXtfck4Yb1stan8&sort=popularity").pipe(map(res=>res.json()));
    googleFonts.subscribe(res => {
      this.fonts = res.items;
      console.log(this.fonts);
    })
 
    console.log(this.fontSettings);
  }
  onNoClick(): void {

    this.dialogRef.close();
  }

  step = 0;

  setStep(index: number) {
    this.step = index;

  }

  nextStep() {
    this.step++;
    console.log(this.fontSettings)
  }

  prevStep() {
    this.step--;
  }

 
}
