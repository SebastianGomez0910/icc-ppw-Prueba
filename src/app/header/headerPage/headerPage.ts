import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header-page',
  imports: [RouterLink],
  templateUrl: './headerPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderPage {}
