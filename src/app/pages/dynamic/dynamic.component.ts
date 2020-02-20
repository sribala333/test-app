import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit {
  userForm: FormGroup;
  name = '   hello world     ';
  quesList = [{ quesId: 1, quesName: 'What is Your Name ?' },
  { quesId: 2, quesName: 'What is Your Qualification ?' },
  { quesId: 3, quesName: 'What is Your Ambition ?' }];
  AnsList = [];
  dupArr = [];
  formDetails: any;
  constructor() { }

  ngOnInit() {
    console.log(this.name.trimStart());
    this.userForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      userList: new FormControl(''),
      userDetails: new FormArray([this.createDynForm()])
    });
    this.quesList.forEach(ele =>
      this.dupArr.push([]));
  }
  createDynForm(): FormGroup {
    return new FormGroup({
      ques: new FormControl('', Validators.required),
      ans: new FormControl('', Validators.required)
    });
  }
  get u() {
    return this.userForm.get('userDetails') as FormArray;
  }
  addField() {
    // const filledArray = new Array(10).fill({ hello: 'goodbye' });
    // const filledArray = new Array(10).fill(null).map(() => ({ hello: 'goodbye' }));
    // const filledArray = [...new Array(10)].map(() => ({ hello: 'goodbye' }));
    // filledArray[0].hello = 'abcdefgh';
    // console.log(filledArray);
    if (this.userForm.get('userDetails').valid) {
      this.u.push(this.createDynForm());
    } else {
      this.userForm.get('userDetails').markAsTouched();
    }
  }
  changeQues(id, index) {
    if (id === 1) {
      this.AnsList = [{ quesId: 1, ansId: 1, ans: 'Sriram' },
      { quesId: 1, ansId: 2, ans: 'Bala' },
      { quesId: 1, ansId: 3, ans: 'Lakshith' }];
    }
    if (id === 2) {
      this.AnsList = [{ quesId: 2, ansId: 4, ans: 'BE' },
      { quesId: 2, ansId: 5, ans: 'MCA' }];
    }
    if (id === 3) {
      this.AnsList = [{ quesId: 3, ansId: 6, ans: 'To become Entrepreneur' },
      { quesId: 3, ansId: 7, ans: 'To become a film maker' }];
    }
    this.dupArr.splice(index, 1, this.AnsList);
  }
  getResDrop(id) {
    for (let i = 0; i <= this.u.value.length; i++) {
      return this.dupArr[id - 1];
    }
  }
  saveDetails() {
    this.formDetails = this.userForm.value;
    this.userForm.reset();
    // while (this.u.controls.length >= 0) {
    //   this.u.removeAt(this.u.controls.length - 1)

    // }
    this.AnsList = [];
    this.dupArr = [];
  }
  removeField(i) {
    this.u.removeAt(i);
  }
  patchDetails() {
    this.ngOnInit();
    this.userForm.patchValue(this.formDetails);
  }
}
