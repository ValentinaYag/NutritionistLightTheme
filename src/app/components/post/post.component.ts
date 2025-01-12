import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  @Input() imgSrc: string = '';
  @Input() alt: string = '';
  @Input() subtitle: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() authorImg: string = '';
  @Input() authorAlt: string = '';
  @Input() authorName: string = '';
  @Input() date: string = '';
}
