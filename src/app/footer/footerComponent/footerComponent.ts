import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  imports: [],
  templateUrl: './footerComponent.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
