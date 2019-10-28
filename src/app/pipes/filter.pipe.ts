import { Pipe, PipeTransform } from '@angular/core';
import { TypeHelper } from '../helper/type.helper';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  /**
   *
   * @param typeHelper helper for object types
   */
  constructor(private typeHelper: TypeHelper) {}

  /**
   * filter object's array by a string property containing a searched text
   *
   * @param items object's array to be filtred
   * @param prop used property to filter items (its value will be compared to searchText)
   * @param searchText searched value
   * @returns any[] filtred items
   */
  public transform(items: any[], prop: string, searchText: string): any[] {
    // return empty array if items is undefined
    if (!items) {
      return [];
    }
    // return all the items if searchText is undefined/empty
    if (!searchText) {
      return items;
    }
    // transform searchText & items to lower case then compare them to get only items that contains searchText in 'prop' property
    return items.filter(it =>
      this.typeHelper.isString(it[prop]) ? this.normalizeString(it[prop]).includes(this.normalizeString(searchText)) : false
    );
  }

  /**
   * Remove any whitespace from a string and apply lowercase
   */
  private normalizeString(string: string): string {
    return string.replace(/\s/g, '').toLowerCase();
  }
}
