import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(){ }
  getFromLocalStorage(){
   return [localStorage.getItem('1'), localStorage.getItem('2'), localStorage.getItem('3')]
  }


}
