import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { NgxEchartsConfig } from "ngx-echarts/lib/ngx-echarts.directive";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HomeComponent } from "./components/home/home.component";
import { HeaderComponent } from "./components/header/header.component";
import { LandingComponent } from "./components/landing/landing.component";
import { LoginComponent } from "./components/login/login.component";
import { NgxEchartsModule } from "ngx-echarts";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        HomeComponent,
        HeaderComponent,
        LandingComponent,
        LoginComponent,
    ],
    imports: [
        NgxEchartsModule,
        BrowserModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }