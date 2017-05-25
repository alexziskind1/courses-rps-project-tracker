import { NgModule } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/platform';

import { BacklogService } from '../services/backlog.service';
import { PtBacklogComponent } from './pt-backlog.component';
import { PTItemModule } from './pt-item/pt-item.module';
import { PipesModule } from './pipes/pipes.module';
import { PTItemListComponent } from './pt-item-list/pt-item-list.component';

@NgModule({
    imports: [
        NativeScriptModule,
        PTItemModule,
        PipesModule
    ],
    exports: [PtBacklogComponent],
    declarations: [
        PtBacklogComponent,
        PTItemListComponent
    ],
    providers: [
        BacklogService
    ],
})
export class PtBacklogModule { }
