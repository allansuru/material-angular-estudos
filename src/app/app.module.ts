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
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialTableComponent, DialogCreateCommentComponent } from './material-table/material-table.component';
import { DataService } from './services/data.service';
import { CommentService } from './services/comments.service';
import { HttpModule } from '@angular/http';
import { ExemplesMaterialComponent } from './exemples-material/exemples-material.component';
import { MtComponentsModule } from './mt-components.module';


@NgModule({
  declarations: [
    AppComponent,
    MaterialTableComponent,
    DialogCreateCommentComponent,
    ExemplesMaterialComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    BrowserModule,
    MtComponentsModule
  ],
  entryComponents: [DialogCreateCommentComponent],
  providers: [
    DataService,
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
