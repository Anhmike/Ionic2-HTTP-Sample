import {Page} from 'ionic-angular';
import { Http } from 'angular2/http';

class PostModel {
    userId : number;
    id : number;
    title : string;
    completed : boolean;
}

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    url = "http://jsonplaceholder.typicode.com/";
    
    list : Array<PostModel>;
    
    constructor(public http : Http){
        
    }
    
    makeHttpRequest(){
        
        console.log("Make Request");
        
        this.http.request(this.url + "posts")
            .subscribe((res)=>{
                console.log(res.json())
                this.list = res.json();
            }, (err)=>{
                console.log(err)
            })
    }
}

