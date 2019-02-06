/**
 * Team class. TODO
 */
export class Team {

    constructor(fields: any) {
      // Quick and dirty extend/assign fields to this model
      // tslint:disable-next-line:forin
      for (const f in fields) {
        // @ts-ignore
        this[f] = fields[f];
      }
    }

  }

  export interface Team {
    [prop: string]: any;
  }
