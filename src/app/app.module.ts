import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { ThemeType } from '@ant-design/icons-angular';




registerLocaleData(en);



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, 
            AppRoutingModule, 
            ReactiveFormsModule, 
            FormsModule, 
            HttpClientModule, 
            BrowserAnimationsModule, 
            IconsProviderModule, 
            NzLayoutModule, 
            NzMenuModule,
            NzBreadCrumbModule,
            
            ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
