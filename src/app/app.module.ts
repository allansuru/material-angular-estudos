import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatInputModule,
   MatSelectModule,
   MatDatepickerModule,
   MatNativeDateModule,
   NativeDateAdapter,
   MatAutocompleteModule,
   MatButtonModule,
   MatButtonToggleModule,
   MatCardModule,
   MatChipsModule,
   MatDividerModule,
   MatExpansionModule,
   MatGridListModule,
   MatIconModule,
   MatListModule,
   MatMenuModule,
   MatProgressBarModule,
   MatProgressSpinnerModule,
   MatRippleModule,
   MatSidenavModule,
   MatSliderModule,
   MatSlideToggleModule,
   MatSnackBarModule,
   MatStepperModule,
   MatTabsModule,
   MatToolbarModule,
   MatTooltipModule,
  } from '@angular/material';
import { NgModule } from '@angular/core';

import {CdkTableModule} from '@angular/cdk/table';

import { AppComponent } from './app.component';
import { MaterialTableComponent, DialogCreateCommentComponent } from './material-table/material-table.component';
import { DataService } from './services/data.service';
import { CommentService } from './services/comments.service';
import { HttpModule } from '@angular/http';
import { ExemplesMaterialComponent } from './exemples-material/exemples-material.component';


@NgModule({
  declarations: [
    AppComponent,
    MaterialTableComponent,
    DialogCreateCommentComponent,
    ExemplesMaterialComponent
  ],
  imports: [
    BrowserModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    HttpModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  entryComponents: [DialogCreateCommentComponent],
  providers: [
    DataService,
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
