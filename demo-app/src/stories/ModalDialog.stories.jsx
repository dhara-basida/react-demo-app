import React, { useState } from 'react';
import ModalDialog from '../components/modal-dialog/ModalDialog';

export default {
  title: 'ModalDialog',
  component: ModalDialog,
};

const MockChildComponent = () => <div tabIndex={0} data-testid="mock-child">Child Component</div>;

export const Basic = (args) => {
  const [title, setTitle] = useState(args.title)
  const handleOnClose = () => {
    console.log('onClose', title);
  };

  return <ModalDialog title={title} onClose={handleOnClose} >
    <MockChildComponent /></ModalDialog>
};

Basic.args = {
  title: 'ADD MOVIE',
}
