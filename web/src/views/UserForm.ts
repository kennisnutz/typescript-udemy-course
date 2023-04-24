import { View } from './View';
import { User, UserProps } from '../models/User';

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onsetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.save-model': this.onSaveClick,
    };
  }

  onSaveClick = (): void => {
    this.model.save();
  };

  onSetNameClick = (): void => {
    const inputEl = this.parent.querySelector('input');
    if (inputEl) {
      const name = inputEl.value;
      this.model.set({ name });
    }
  };
  onsetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  template(): string {
    return `
    <div>    
    <input placeholder="${this.model.get('name')}"/>
    <button class='set-name'>Change name</button>
    <button class='set-age'>Set Random Age</button>
    <button class='save-model'>Save</button>
    </div>
    `;
  }
}
