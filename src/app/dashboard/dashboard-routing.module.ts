import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./routes/main/main.component";
import { canActivateIsAdmin } from "../shared/services/permission.service";

const routes: Routes = [
    {path: "", component: MainComponent, canActivate: [canActivateIsAdmin]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DashboardRoutingModule { }