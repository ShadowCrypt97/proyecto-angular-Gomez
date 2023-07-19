import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { ControlErrorMessagesPipe } from './pipes/control-error-messages.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { ConcatFullNamePipe } from './pipes/concat-full-name.pipe';
import { HttpClientModule } from '@angular/common/http';
import { TitulosDirective } from './directives/titulos.directive';




@NgModule({
  declarations: [
    ControlErrorMessagesPipe,
    ConcatFullNamePipe,
    TitulosDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    ControlErrorMessagesPipe,
    ConcatFullNamePipe,
    ReactiveFormsModule,
    MatTableModule,
    HttpClientModule,
    TitulosDirective
  ]
})
export class SharedModule { }
