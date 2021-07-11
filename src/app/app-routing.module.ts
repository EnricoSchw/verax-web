import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './app-module/start-page/start-page.component';
import { ProfileGuard } from './app-module/guards/profile.guard';
import { DashboardPageComponent } from './app-module/dashboard-page/dashboard-page.component';
import { NoProfileGuard } from './app-module/guards/no-profile.guard';
import { PageNotFoundPageComponent } from './app-module/page-not-found-page/page-not-found-page.component';
import { ProfilePageComponent } from './app-module/dashboard-page/profile-page/profile-page.component';
import { OverviewPageComponent } from './app-module/dashboard-page/overview-page/overview-page.component';

const routes: Routes = [
  {
    path: '', component: DashboardPageComponent, canActivate: [ProfileGuard],
    children: [
      {path: 'profile', component: ProfilePageComponent},
      {path: '', component: OverviewPageComponent}
    ]
  },
  {path: 'start', component: StartPageComponent, canActivate: [NoProfileGuard]},
  {path: '**', component: PageNotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
