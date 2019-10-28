import { Directive, HostBinding, Input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: 'a[href]',
})
export class ExternalLinkDirective {
  @HostBinding('attr.rel') relAttr = '';
  @HostBinding('attr.target') targetAttr = '';
  @HostBinding('attr.href') hrefAttr = '';
  @Input() href: string;

  ngOnChanges() {
    this.hrefAttr = this.href;
  
    if (this.isLinkExternal()) {
      this.relAttr = 'noopener';
      this.targetAttr = '_blank';
    }
  }

  private isLinkExternal() {
      console.log(location.hostname);
      console.log(!this.href.includes(location.hostname));
    return !this.href.includes(location.hostname);
  }
}
