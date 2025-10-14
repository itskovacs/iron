import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { FocusTrapModule } from 'primeng/focustrap';

@Component({
  selector: 'app-attach-modal',
  imports: [FloatLabelModule, InputTextModule, ButtonModule, ReactiveFormsModule, FocusTrapModule],
  standalone: true,
  templateUrl: './attach-modal.component.html',
  styleUrl: './attach-modal.component.scss',
})
export class AttachModalComponent {
  guidInput = new FormControl('');
  constructor(private ref: DynamicDialogRef) {}

  closeDialog() {
    if (!this.guidInput.value) return;
    this.ref.close(this.guidInput.value);
  }
}
