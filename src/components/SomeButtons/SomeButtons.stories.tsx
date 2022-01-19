import React from 'react';
import { storiesOf } from '@storybook/react';
import { SomeButtons, Facebook, Instagram, Whatsapp } from '.';

storiesOf('Some buttons', module)
  .add('All buttons row', () => (
    <SomeButtons>
      <Facebook facebookLink='https://facebook.com' />
      <Instagram instagramLink='https://instagram.com/' />
      <Whatsapp whatsappLink='https://whatsapp.com' />
    </SomeButtons>
  ))
  .add('Facebook', () => <Facebook facebookLink='https://facebook.com' />)
  .add('Instagram', () => <Instagram instagramLink='https://instagram.com' />)
  .add('Whatsapp', () => <Whatsapp whatsappLink='https://whatsapp.com' />);
