import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './app-module/start-page/start-page.component';
import { ProfileGuard } from './app-module/guards/profile.guard';
import { DashboardPageComponent } from './app-module/dashboard-page/dashboard-page.component';
import { NoProfileGuard } from './app-module/guards/no-profile.guard';

const routes: Routes = [
  { path: '', component: DashboardPageComponent, canActivate: [ProfileGuard] },
  { path: 'start', component: StartPageComponent, canActivate: [NoProfileGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
