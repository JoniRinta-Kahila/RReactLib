import React from 'react';
import { storiesOf } from '@storybook/react';
import { Collapsible } from './Collapsible';

storiesOf('collapsible', module)
  .add('default', () => <Collapsible></Collapsible>)
  .add('Example-1', () => (
    <Collapsible label='Example' labelColor='"fff' labelBackground='darkgrey'>
      <div>
        <p>asd</p>
        <p>kek</p>
        <p>foo</p>
        <p>bar</p>
      </div>
    </Collapsible>
  ))
  .add('Example-2', () => (
    <>
      <Collapsible label='Collapsible-1'>
        <div>
          <p>asd</p>
          <p>kek</p>
          <p>foo</p>
          <p>bar</p>
        </div>
      </Collapsible>
      <Collapsible label='Collapsible-2'>
        <div>
          <p>asd</p>
          <p>kek</p>
          <p>foo</p>
          <p>bar</p>
        </div>
      </Collapsible>
      <Collapsible label='Collapsible-3' defaultOpen>
        <div>
          <p>asd</p>
          <p>kek</p>
          <p>foo</p>
          <p>bar</p>
        </div>
      </Collapsible>
    </>
  ));
