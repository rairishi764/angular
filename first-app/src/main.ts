import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// tells main to bootstrap AppModule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
