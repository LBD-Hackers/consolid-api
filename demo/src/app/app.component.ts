import { Component, OnInit } from '@angular/core';
import { SolidAuthService } from './solid-auth.service';
import { Consolid } from "../../../src";
import { ICDDService } from '../../../src/helpers/icdd-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public isLoggedIn: boolean = false;
  public session: any;
  public icdd?: ICDDService;

  public icddName: string = "Project ABC";
  public makePublic: boolean = true;
  public rootURL: string = "http://localhost:3000/mhra/";

  constructor(
    private _auth: SolidAuthService
  ){}

  ngOnInit(): void {
    // Subscribe to login status and session
    this._auth.getIsLoggedIn().subscribe(state => {
      this.isLoggedIn = state;
    }, err => console.log(err));

    this._auth.getSession().subscribe(session => {
      this.session = session;
      if(session != undefined){
        this.icdd = new Consolid.ICDDService(session.fetch);
      }
    }, err => console.log(err));

  }
  
  login(){
    const identityProvider = "http://localhost:3000";
    this._auth.login(identityProvider);
    this.session = this._auth.session;
  }

  logout(){
    this._auth.logout();
  }

  async initICDD(){
    if(this.icdd == undefined) return;

    try{
      const icddRes = await this.icdd.initICDD(this.rootURL, this.icddName, this.makePublic);
      console.log(icddRes);
    }catch(err){
      console.log(err);
    }
  }

  async deleteICDD(){
    if(this.icdd == undefined) return;
    const icddURL = this.rootURL + encodeURIComponent(this.icddName) + "/";

    try{
      const icddRes = await this.icdd.deleteICDD(icddURL);
      console.log(icddRes);
    }catch(err){
      console.log(err);
    }
  }

  public async uploadFile(fileList: FileList){
    if(this.icdd == undefined) return;
    const icddURL = this.rootURL + encodeURIComponent(this.icddName) + "/";

    // Upload the files
    const file = fileList[0];
    
    try{
      const uploadRes = await this.icdd.addPayloadDocuments(icddURL, [file], this.makePublic);
      console.log(uploadRes);
    }catch(err){
      console.log(err);
    }

  }

}
