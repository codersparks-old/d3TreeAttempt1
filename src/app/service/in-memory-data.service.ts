import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';

import {InMemoryDbService} from 'angular-in-memory-web-api';
import {TreeData} from '../model/tree-data';


const tree: TreeData = {
  name: 'root',
  children: [
    {
      name: 'dept1',
      children: [
        {name: 'dept1group1'},
        {name: 'dept1group2'},
        {
          name: 'dept1group3',
          children: [
            {name: 'dept1group3.1'},
            {name: 'dept1group3.2'},
            {name: 'dept1group3.3'}
          ]
        }
      ]
    },
    {
      name: 'dept2',
      children: [
        {name: 'dept2group1'},
        {name: 'dept2group2'},
        {
          name: 'dept2group3',
          children: [
            {name: 'dept2group3.1'},
            {name: 'dept2group3.2'},
            {name: 'dept2group3.3'}
          ]
        }
      ]
    }
  ]
};

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() {
  }

  createDb() {
    return {tree};
  }
}
