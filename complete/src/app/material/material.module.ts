import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatTableModule,
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
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';

import { MaterialRoutes } from './material.routing';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { InputComponent } from './input/input.component';
import {
  CheckboxComponent,
  MatCheckboxDemoNestedChecklistComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ListsComponent } from './lists/lists.component';
import { GridComponent } from './grid/grid.component';
import { ProgressComponent } from './progress/progress.component';
import { TabsComponent } from './tabs/tabs.component';
import { ToggleComponent } from './toggle/toggle.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { MenuComponent } from './menu/menu.component';
import { SliderComponent } from './slider/slider.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import {
  DialogComponent,
  ContentElementDialogComponent,
  IFrameDialogComponent,
  JazzDialogComponent } from './dialog/dialog.component';
import { SelectComponent } from './select/select.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { ChipsComponent } from './chips/chips.component';
import { DatepickerComponent } from './datepicker/datepicker.component';

import { ExpansionComponent } from './expansion/expansion.component';
import { TableComponent } from './table/table.component';
import { PeopleDatabase } from './table/people-database';
import { TableHeaderDemoComponent } from './table/table-header-demo';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatTableModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSortModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatNativeDateModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule
  ],
  providers: [
    PeopleDatabase
  ],
  declarations: [
    ButtonsComponent,
    CardsComponent,
    InputComponent,
    CheckboxComponent,
    MatCheckboxDemoNestedChecklistComponent,
    RadioComponent,
    ToolbarComponent,
    ListsComponent,
    GridComponent,
    ProgressComponent,
    TabsComponent,
    ToggleComponent,
    TooltipComponent,
    MenuComponent,
    SliderComponent,
    SnackbarComponent,
    DialogComponent,
    SelectComponent,
    AutocompleteComponent,
    ChipsComponent,
    DatepickerComponent,
    ContentElementDialogComponent,
    IFrameDialogComponent,
    JazzDialogComponent,
    ExpansionComponent,
    TableComponent,
    TableHeaderDemoComponent
  ],
  entryComponents: [
    ContentElementDialogComponent,
    IFrameDialogComponent,
    JazzDialogComponent
  ],
})

export class MaterialComponentsModule {}
