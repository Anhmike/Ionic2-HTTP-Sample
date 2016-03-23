import {Page, NavController, NavParams, Alert} from 'ionic-angular';
import { Http } from 'angular2/http';


@Page({
  templateUrl: 'build/pages/detail/detail.html'
})
export class DetailPage {
    url = "http://samplejsonapi.herokuapp.com/";
    data;
    list: Array<{}>;

    constructor(public http : Http, public nav : NavController, public params: NavParams){
        this.data = this.params.data; 
    }
    
    ngOnInit(){
        this.makeHttpRequest();
    }
    
    makeHttpRequest(){
        
        console.log("Make Request");    
        
        this.http.request(this.url + "posts/" + this.data.id + "/comments" )
            .subscribe((res)=>{
                console.log(res.json())                
                this.list = res.json();
            }, (err)=>{
                console.log(err);
            })
    }
}

