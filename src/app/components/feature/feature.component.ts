import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss'
})
export class FeatureComponent {
@Input() title: string='';
@Input() description: string='';
@Input() imageSrc: string='';
}
