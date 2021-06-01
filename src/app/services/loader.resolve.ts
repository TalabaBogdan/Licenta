import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { CryptoService } from "./crypto.service";

export class Loader implements Resolve<any> {

    constructor(crypto : CryptoService){
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
    }
    
}