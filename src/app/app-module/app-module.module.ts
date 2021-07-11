import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartPageComponent } from './start-page/start-page.component';
import { AngularMaterialModule } from '../angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { ProfilePageComponent } from './dashboard-page/profile-page/profile-page.component';
import { ProfileModule } from './profile/profile.module';
import { OverviewPageComponent } from './dashboard-page/overview-page/overview-page.component';
import { PageNotFoundPageComponent } from './page-not-found-page/page-not-found-page.component';
import { AppRoutingModule } from '../app-routing.module';

const appearance: MatFormFieldDefaultOptions = {
  appearance: 'outline'
};

@NgModule({
  declarations: [
    StartPageComponent,
    DashboardPageComponent,
    ProfilePageComponent,
    OverviewPageComponent,
    PageNotFoundPageComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    ProfileModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: appearance
    }
    // ... other providers like services
  ],
})
export class AppModuleModule {
}
