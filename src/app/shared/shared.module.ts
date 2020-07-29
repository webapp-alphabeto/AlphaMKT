import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { NgxMaskModule, IConfig, MaskPipe } from "ngx-mask";
import { MaskArrayPipe } from "./pipes/mask-array.pipe";
import { AnimacaoEntreRotasComponent } from "./components/animacao-entre-rotas/animacao-entre-rotas.component";
import { PortinariModule } from "../portinari/portinari.module";
import { CommonPresentationComponent } from './components/common-presentation/common-presentation.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [ToolbarComponent, MaskArrayPipe, AnimacaoEntreRotasComponent, CommonPresentationComponent],
  imports: [CommonModule, PortinariModule, NgxMaskModule.forRoot(maskConfig)],
  exports: [
    ToolbarComponent,
    AnimacaoEntreRotasComponent,
    MaskPipe,
    MaskArrayPipe,
    CommonPresentationComponent
  ],
  providers: [MaskPipe],
})
export class SharedModule {}
