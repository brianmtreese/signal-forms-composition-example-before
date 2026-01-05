import { Component } from '@angular/core';
import { AccountFormComponent } from '../../account/account-form/account-form.component';
import { AddressFormComponent } from '../../shipping/address-form/address-form.component';
import { PreferencesFormComponent } from '../../account/preferences-form/preferences-form.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss'],
  imports: [
    AccountFormComponent,
    AddressFormComponent,
    PreferencesFormComponent,
  ],
})
export class ProfileFormComponent {
  protected onSubmit(event: SubmitEvent) {
    event.preventDefault();
  }
}


