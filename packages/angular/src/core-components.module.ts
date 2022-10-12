
import { NgModule } from '@angular/core';
import { DIRECTIVES } from './lib/stencil-generated';

@NgModule({
    declarations: [...DIRECTIVES],
    exports: [...DIRECTIVES],
})
export class CoreComponentsModule { }