import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { LogDetailsComponent } from './log-details/log-details.component';
import { LogDetailComponent } from './log-details/log-detail/log-detail.component';
import { LogDetailListComponent } from './log-details/log-detail-list/log-detail-list.component';
import { LogDetailService } from './shared/log-detail.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LogDetailsComponent,
    LogDetailComponent,
    LogDetailListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ChartsModule
  ],
  providers: [LogDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
