import { Inject, Injectable } from '@angular/core';

// Import from "@inrupt/solid-client-authn-browser"
import {
  login,
  logout,
  handleIncomingRedirect,
  getDefaultSession,
  fetch,
  Session
} from "@inrupt/solid-client-authn-browser";

// Import from "@inrupt/solid-client"
import {
  getSolidDataset,
  getThing,
  getStringNoLocale,
  getUrlAll,
  getFile
} from "@inrupt/solid-client";

import { VCARD, FOAF } from "@inrupt/vocab-common-rdf";
import { BehaviorSubject, Observable } from 'rxjs';

export interface Profile{
  profile: any,
  fn: string|null,
  photo: string|null,
  role: string|null
}

export interface TypeIndex{
  privateIndex: string,
  publicIndex: string
}

export enum IdentityProvider{
  InruptCom="https://broker.pod.inrupt.com",
  InruptNet="https://inrupt.net/"
}

@Injectable({
  providedIn: 'root'
})
export class SolidAuthService {

  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private sessionSubject: BehaviorSubject<Session|undefined> = new BehaviorSubject<Session|undefined>(undefined);

  public session?: Session;

  constructor(){
      
    // Call handleRedirectAfterLogin() as we might be returning after a login redirect
    this.handleRedirectAfterLogin();

  }

  public getIsLoggedIn(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

  public getSession(): Observable<Session|undefined> {
    return this.sessionSubject.asObservable();
  }

  public login(identityProvider: IdentityProvider|string = IdentityProvider.InruptCom) {
    return login({
      oidcIssuer: identityProvider,
      redirectUrl: window.location.href,
      clientName: "Consolid"
    });
  }

  public async logout(){
    await logout();
    this.setIsLoggedIn(false);
    this.setSession(undefined);
  }

  private async handleRedirectAfterLogin() {

    // Handle incoming redirect
    try{
      await handleIncomingRedirect({restorePreviousSession: true});
    }catch(err){
      console.log(err);
    }
    
    this.session = getDefaultSession();
    console.log(this.session);

    this.setIsLoggedIn(this.session.info.isLoggedIn);
    this.setSession(this.session);

  }

  private setIsLoggedIn(state: boolean): void {
    return this.isLoggedInSubject.next(state);
  }

  private setSession(session: Session|undefined): void {
    return this.sessionSubject.next(session);
  }

}