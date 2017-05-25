import { Component, Output, EventEmitter } from "@angular/core";


@Component({
    moduleId: module.id,
    selector: 'inc-dec',
    templateUrl: 'inc-dec.component.html',
    styleUrls: ['inc-dec.component.css']
})
export class IncDecComponent {

    @Output() notifyIncDecTapped: EventEmitter<boolean> = new EventEmitter<boolean>();

    public decTap() {
        //Emit event
        this.notifyIncDecTapped.emit(false);
    }

    public incTap() {
        //Emit event
        this.notifyIncDecTapped.emit(true);
    }
}

