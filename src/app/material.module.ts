import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule],
  exports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule]
})

export class MaterialModule {}
