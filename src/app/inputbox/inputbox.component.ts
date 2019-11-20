import { ApiService } from './../service/api.service';
import { Component } from "@angular/core";


@Component({
    selector:'app-inputbox',
    templateUrl:'inputbox.component.html',
    styleUrls:['inputbox.component.scss']
})
export class InputboxComponent {
    private users:any;

    constructor(private data:ApiService){
      this.getuser();
    }
    getuser(){
      var that=this;
      this.data.fetchuser().subscribe(function(res){
        that.users=res;
        that.data.masterData=res;
      })
    }

    namedisplay(event){
      var searchKey=event.target.value;
      
      if(searchKey)
      {
        this.users=this.data.masterData.filter(function(user,index){
          
          return user.name.toLowerCase().indexOf(searchKey)!== -1;
        });
      } 
      else{
        this.users=this.data.masterData;
      }
    }
  }
