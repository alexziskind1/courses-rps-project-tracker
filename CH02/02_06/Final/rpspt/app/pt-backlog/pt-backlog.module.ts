import { NgModule } from '@angular/core';

import { PtBacklogComponent } from './pt-backlog.component';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
    imports: [PipesModule],
    exports: [],
    declarations: [PtBacklogComponent],
    providers: [],
})
export class PtBacklogModule { }
