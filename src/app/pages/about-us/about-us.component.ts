import { Component } from '@angular/core';
import { NavComponent } from '../../UI/Shared-UI/nav/nav.component';
import { FooterComponent } from '../../UI/Shared-UI/footer/footer.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [NavComponent,FooterComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
