import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';

//router
import { routing } from './routing.module';

//Materials START 
import { 
  MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, 
  MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, 
  MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatStepperModule, 
} from '@angular/material'; 
import {CdkTableModule} from '@angular/cdk/table'; 
//Materials END 



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    routing,
    BrowserModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
     //Angular Materials
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
    //END of Angular Materials
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
