import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  template: `
<div class="w3-third">
<div class="w3-card">
<img src="{{img}}" style="width:100%">
<div class="w3-container">
<h4>{{name}}</h4>
</div>
</div>
</div>
  
  `,
  styles: [`h1 { font-family: Lato; }`],
})
export class CardComponent {
  @Input() name: string;
  @Input() img: string;
}
