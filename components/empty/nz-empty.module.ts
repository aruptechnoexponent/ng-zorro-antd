import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAddOnModule } from 'ng-zorro-antd/core';

import { NzI18nModule } from 'ng-zorro-antd/i18n';

import { NzEmbedEmptyComponent } from './nz-embed-empty.component';
import { NzEmptyComponent } from './nz-empty.component';

@NgModule({
  imports: [CommonModule, PortalModule, NzAddOnModule, NzI18nModule],
  declarations: [NzEmptyComponent, NzEmbedEmptyComponent],
  exports: [NzEmptyComponent, NzEmbedEmptyComponent]
})
export class NzEmptyModule {}
