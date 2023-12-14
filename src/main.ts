import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import routeConfig from './app/app.routes';
import { provideRouter } from '@angular/router';
import { InMemoryDataService } from './app/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { importProvidersFrom } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent,
  {
    providers: [
      provideProtractorTestingSupport(),
      provideHttpClient(),
      importProvidersFrom([
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
      ]),
      provideRouter(routeConfig),
    ]
  }
).catch(err => console.error(err));



/*importProvidersFrom([
  HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
])

*/




