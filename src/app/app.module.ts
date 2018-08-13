import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatButtonModule, MatCheckboxModule, MatExpansionModule, MatSelectModule, MatIconModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatListModule, MAT_DIALOG_DEFAULT_OPTIONS, MatSliderModule } from "@angular/material";
import { FontDialogComponent } from './components/font-dialog/font-dialog.component';
import { HttpModule } from '@angular/http';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    FontDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatSelectModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    HttpModule,
    FormsModule,
    MatListModule,
    MatSliderModule
  ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}],
  bootstrap: [AppComponent],
  entryComponents: [FontDialogComponent]
})
export class AppModule { }
