import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { TextMaskModule } from 'angular2-text-mask';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { mascaras } from './utils/mascaras';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, TextMaskModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
})
export class App implements OnInit {
  public formulario!: FormGroup;

  public mascara = {
    guide: false,
    showMask: true,
    mask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
  };

  public ngOnInit(): void {
    this.iniciarFormulario();
  }

  private iniciarFormulario(): void {
    this.formulario = new FormGroup({
      selecionador: new FormControl(),
      texto: new FormControl(),
    });

    this.formulario.valueChanges.subscribe(console.log);

    this.resetarCampo();
  }

  public tipoDeMascara(): (string | RegExp)[] | false {
    const tipoDocumento = this.formulario.get('selecionador')?.value;

    if (tipoDocumento in mascaras) {
      return mascaras[tipoDocumento];
    }

    return false;
  }

  public resetarCampo() {
    this.formulario.get('selecionador')?.valueChanges.subscribe(v => {
      this.formulario.patchValue({
        texto: ''
      })
    });

    this.formulario.get('texto')?.updateValueAndValidity();
  }
}

bootstrapApplication(App);
