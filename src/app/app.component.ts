import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'faq-accordin-card-main-code';
  onClick(e:any){
    let elm = <HTMLButtonElement>document.querySelector('#'+e.delegateTarget.id)
    if(elm.classList.contains('collapsed')){
      elm.classList.remove('active')
    }
    else{
      elm.classList.add('active')
    }
  }
}
