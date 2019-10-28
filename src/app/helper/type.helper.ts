import { Injectable } from '@angular/core';

/**
 * TypeHelper provide helper method for objects types
 */
@Injectable()
export class TypeHelper {
  /**
   * TypeHelper Service
   */
  constructor() {}

  /**
   * checks if variable is of type string
   * @param obj object to be checked
   */
  public isString(obj: any): boolean {
    return typeof obj === 'string';
  }
}
