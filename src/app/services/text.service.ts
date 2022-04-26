import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TextService {
  constructor() {}
  escape(str) {
    return str
      .replace(/[\\]/g, '\\')
      .replace(/[\"]/g, '"')
      .replace(/[\/]/g, '/')
      .replace(/[\b]/g, '<br>')
      .replace(/[\f]/g, '<br>')
      .replace(/[\n]/g, '<br>')
      .replace(/[\r]/g, '<br>')
      .replace(/[\t]/g, '<br>')
      ;
  }
  unescape(str) {
    return str
      .replace(/<br>/g, ' ');
  }
}
