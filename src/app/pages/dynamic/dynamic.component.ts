import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit {
  allocationForm: FormGroup;
  name = '   hello world     ';
  materialList = [{ materialId: 1, materialName: 'What is Your Name ?' },
  { materialId: 2, materialName: 'What is Your Qualification ?' },
  { materialId: 3, materialName: 'What is Your Ambition ?' }];
  regionList = [{ regionId: 1, regionName: 'Ariyalur' }];
  godownList = [{ regionId: 1, godownId: 1, godownName: 'Ariyalur' }]
  subMaterialBaseList = [
    { materialId: 2, subMaterialId: 4, subMaterialName: 'BE' },
    { materialId: 2, subMaterialId: 5, subMaterialName: 'MCA' },
    { materialId: 3, subMaterialId: 6, subMaterialName: 'To become Entrepreneur' },
    { materialId: 3, subMaterialId: 7, subMaterialName: 'To become a film maker' }
  ];
  subMaterialList = [];
  dupArr = [];
  formDetails = [];
  constructor() { }

  ngOnInit() {
    console.log(this.name.trimStart());
    this.allocationForm = new FormGroup({
      regionId: new FormControl('', Validators.required),
      godownId: new FormControl('', Validators.required),
      materialDetails: new FormArray([this.createDynForm()])
    });
    this.materialList.forEach(ele =>
      this.dupArr.push([]));
  }
  createDynForm(): FormGroup {
    return new FormGroup({
      materialId: new FormControl('', Validators.required),
      subMaterialId: new FormControl('', Validators.required),
      allocatedQuantity: new FormControl('', Validators.required),
    });
  }
  get u() {
    return this.allocationForm.get('materialDetails') as FormArray;
  }
  addField() {
    // const filledArray = new Array(10).fill({ hello: 'goodbye' });
    // const filledArray = new Array(10).fill(null).map(() => ({ hello: 'goodbye' }));
    // const filledArray = [...new Array(10)].map(() => ({ hello: 'goodbye' }));
    // filledArray[0].hello = 'abcdefgh';
    // console.log(filledArray);
    if (this.allocationForm.get('materialDetails').valid) {
      if (this.u.controls.length > 1) {
        const materialId = this.u.controls[this.u.controls.length - 1].get('materialId').value;
        const subMaterialId = this.u.controls[this.u.controls.length - 1].get('subMaterialId').value;
        if (materialId === 1 && this.u.value.filter(x => x.materialId === materialId).length > 1) {
          this.u.controls[this.u.controls.length - 1].reset();
          return true;
        }
        if (this.u.value.filter(x => x.materialId === materialId).length > 1 &&
          this.u.value.filter(x => x.subMaterialId === subMaterialId).length > 1) {
            this.u.controls[this.u.controls.length - 1].reset();
          return true;
        }
      }
      this.u.push(this.createDynForm());
    } else {
      this.allocationForm.get('materialDetails').markAsTouched();
    }
  }
  changeMaterial(id, index) {
    this.subMaterialList = JSON.parse(JSON.stringify(this.subMaterialBaseList));
    if (id === 1) {
      this.subMaterialList = [];
      this.u.controls[this.u.controls.length - 1].get('subMaterialId').disable();      
      this.u.controls[this.u.controls.length - 1].get('subMaterialId').setValue(null);
    } else {
      this.u.controls[this.u.controls.length - 1].get('subMaterialId').enable();   
    }
    this.subMaterialList = this.subMaterialList.filter(x => x.materialId === id);
    this.dupArr.splice(index, 1, this.subMaterialList);
  }
  getResDrop(id) {
    for (let i = 0; i <= this.u.value.length; i++) {
      return this.dupArr[id - 1];
    }
  }
  saveDetails() {
    this.formDetails = this.allocationForm.value;
    this.allocationForm.reset();
    // while (this.u.controls.length >= 0) {
    //   this.u.removeAt(this.u.controls.length - 1)

    // }
    this.subMaterialList = [];
    this.dupArr = [];
  }
  removeField(i) {
    this.u.removeAt(i);
  }
  patchDetails() {
    this.ngOnInit();
    this.allocationForm.patchValue(this.formDetails);
  }
}
