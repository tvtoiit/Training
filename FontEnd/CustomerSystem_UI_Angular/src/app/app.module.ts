import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './customersystem/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { InputElementComponent } from './customersystem/common/input-element/input-element.component';
import { HeaderComponent } from './customersystem/common/header/header.component';
import { FooterComponent } from './customersystem/common/footer/footer.component';
import { SearchComponent } from './customersystem/search/search.component';
import { EditComponent } from './customersystem/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InputElementComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
