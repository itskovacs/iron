import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { FocusTrapModule } from 'primeng/focustrap';

@Component({
  selector: 'app-webhook-modal',
  imports: [FloatLabelModule, InputTextModule, ButtonModule, ReactiveFormsModule, FocusTrapModule],
  standalone: true,
  templateUrl: './webhook-modal.component.html',
  styleUrl: './webhook-modal.component.scss',
})
export class WebhookModalComponent {
  webhookInput = new FormControl('');
  constructor(private ref: DynamicDialogRef) {}

  closeDialog() {
    if (!this.webhookInput.value) return;
    let ret = this.webhookInput.value;
    this.ref.close(ret);
  }
}
