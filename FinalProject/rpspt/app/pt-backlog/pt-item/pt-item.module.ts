//angular imports
import { NgModule, NgModuleFactoryLoader } from "@angular/core";

//nativescript imports
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NSModuleFactoryLoader } from "../../shared/ns-module-factory-loader";
import { ModalDialogService } from "nativescript-angular/modal-dialog";
import { registerElement } from "nativescript-angular/element-registry";
import { isIOS } from "platform";

//app imports
import { BacklogService } from '../../services/backlog.service';

import { PTItemDetailsComponent } from './pt-item-details.component';
import { PTItemTasksComponent } from './pt-item-tasks.component';
import { PTItemChitchatComponent } from './pt-item-chitchat.component';
import { IncDecComponent } from '../shared/inc-dec.component';
import { ItemTypePickerModalComponent } from '../shared/item-type-picker-modal.component';
import { UserPickerModalComponent } from '../shared/user-picker-modal.component';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        PipesModule
    ],
    declarations: [
        PTItemDetailsComponent,
        PTItemTasksComponent,
        PTItemChitchatComponent,
        IncDecComponent,
        ItemTypePickerModalComponent,
        UserPickerModalComponent
    ],
    entryComponents: [
        ItemTypePickerModalComponent,
        UserPickerModalComponent],
    providers: [
        BacklogService,
        ModalDialogService,
        { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader }

    ]
})
export class PTItemModule { }
