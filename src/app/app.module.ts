import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllinfoComponent } from './allinfo/allinfo.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgModel, FormControl, FormGroup } from '@angular/forms';
import { LoginComponent } from './login/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

import { MatIconModule} from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule} from '@angular/material/grid-list';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TableComponent } from './table/table.component';

import {MatDatepickerModule} from '@angular/material/datepicker';

import {MatDialogModule} from '@angular/material/dialog';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    AllinfoComponent,
    HomeComponent,
    LoginComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatRadioModule,
    MatGridListModule,
    MatToolbarModule,
        MatCardModule,
        MatMenuModule,
        MatTableModule,
        MatDividerModule,
        MatSlideToggleModule,
        MatSelectModule,
        MatOptionModule,
        MatProgressSpinnerModule,
        MatDatepickerModule,
        MatPaginatorModule,
        MatDialogModule,
        MatSlideToggleModule,
        MatCheckboxModule,
        MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
