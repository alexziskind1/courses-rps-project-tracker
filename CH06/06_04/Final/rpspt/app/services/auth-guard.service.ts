//angular imports
import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";

//app imports
import { AuthenticationService } from './';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate() {
        if (AuthenticationService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(["/login"]);
            return false;
        }
    }
}