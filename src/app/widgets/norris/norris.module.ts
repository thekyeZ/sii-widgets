import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NorrisComponent } from "./norris.component";
import { AdminPanelModule } from "./adminPanel/admin/module/admin-panel.module";
import { headerModule } from "./header/module/header.module";
import { FooterModule } from "./footer/module/module.module";
import { MemListModule } from "./mem/mem-list/module/module.module";

@NgModule({
  declarations: [NorrisComponent],

  imports: [
    CommonModule,
    headerModule,
    FooterModule,
    MemListModule,
    AdminPanelModule,
  ],
  exports: [NorrisComponent],
})
export class NorrisModule {}
