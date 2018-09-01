import { Component, TemplateRef  } from '@angular/core';
import { FontDialogComponent } from './components/font-dialog/font-dialog.component';
import { MatDialog } from '../../node_modules/@angular/material';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Http } from '../../node_modules/@angular/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  modalRef: BsModalRef;
  fonts: any
  font_family: string;
  font_style: string;
  font_size: number;
  font_spacing: number;
  
  constructor(public dialog: MatDialog, private modalService: BsModalService, private http: Http) {

  }

  ngOnInit(){
    var googleFonts = this.http.get("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCo0RYfRswDkBZbCnJXAXtfck4Yb1stan8&sort=popularity").pipe(map(res=>res.json()));
    googleFonts.subscribe(res => {
      this.fonts = res.items;
      console.log(this.fonts);
    })
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
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
