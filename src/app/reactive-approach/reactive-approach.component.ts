import { Component , OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-approach',
  templateUrl: './reactive-approach.component.html',
  styleUrls: ['./reactive-approach.component.css']
})
export class ReactiveApproachComponent implements OnInit {


  // "" != null


  // defined * undefined

  //null != undefined


  //plan


  //1. i have to understand about the this.userDetaisFormgroup
  //    then i see that username status is in valid(i do't aggre)
  //2. i am goint to prepare the message validation
  //3. i have to write the required validator

  userDetailsFormGroup : FormGroup;


  //component get init
  ngOnInit(): void {

    this.userDetailsFormGroup = new FormGroup({
      'userName' : new FormControl(null ,
         [Validators.required , Validators.minLength(3)]),
       'choice'  : new FormControl("" , [Validators.required])
    })
    
  }


  onSubmit(){
     console.log(this.userDetailsFormGroup)
  }
  

  

  optionsList = [{
    name: "Yes", value: 1
  }, {
    name: "No", value: 1
  }
  ]






}
