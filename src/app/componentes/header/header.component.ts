import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
public title: string = "E Commerce"
@Input() productosRecibidosDeApp: any = [];
}
