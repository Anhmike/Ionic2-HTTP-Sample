import {Page, NavController, Alert} from 'ionic-angular';
import { Http } from 'angular2/http';

import { DetailPage } from '../detail/detail';

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
    url = "http://samplejsonapi.herokuapp.com/";
    list : Array<PostModel>;    
    
    constructor(public http : Http, public nav : NavController){  
    }
        
    loader(){
        let loader = Alert.create({
            title: 'Loading...'
        });
        
        return {
            show : () => {
                this.nav.present(loader);
                return loader;
            } 
        }
    }
    
    makeHttpRequest(){
        
        console.log("Make Request");
        let loader = this.loader().show();

        this.http.request(this.url + "posts")
            .subscribe((res)=>{
                console.log(res.json())
                this.list = res.json();
                loader.destroy();
            }, (err)=>{
                console.log(err)
                loader.destroy();
            })
    }
    
    gotoDetail(item: PostModel){
        this.nav.push(DetailPage, item);
    }
}

