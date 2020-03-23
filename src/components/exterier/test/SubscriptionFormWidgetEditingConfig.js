// src/Widgets/SubscriptionFormWidget/SubscriptionFormWidgetEditingConfig.js

import * as Scrivito from 'scrivito';
import buttonWidgetIcon from '../../assets/images/button_widget.svg';

Scrivito.provideEditingConfig('SubscriptionFormWidget', {
  properties: [
    'buttonText',
    'confirmationText',
  ],
  title: 'Subscription Form',
  description: 'Newsletter subscription widget.',
  thumbnail: `/${buttonWidgetIcon}`,
  attributes: {
    buttonText: {
      title: 'Submit button text',
    },
    confirmationText: {
      title: 'Confirmation text',
      description: 'Displayed after successfully submitting the form',
    },
  },
});