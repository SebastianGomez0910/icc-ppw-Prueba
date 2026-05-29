import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BanderaService } from '../../service/banderaService';
import { BanderasResponse } from '../../interface/bandera.interface';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-hero-component',
  imports: [],
  templateUrl: './heroComponent.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {

  private banderaService=inject(BanderaService);

  banderaResource=rxResource({
    stream:() => this.banderaService.getBandera()
  });

  getNombreNativo(nativeNameObj: any): string {
    if (!nativeNameObj) return 'Desconocido';
  
    const valores = Object.values(nativeNameObj) as any[];
  
    return valores[0]?.common ?? 'Desconocido';
  }
}
