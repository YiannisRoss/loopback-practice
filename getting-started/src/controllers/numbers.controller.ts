// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';

import {get} from '@loopback/rest';

export class NumbersController {
  @get('/numbers')
  numbers(): any {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  }
}

