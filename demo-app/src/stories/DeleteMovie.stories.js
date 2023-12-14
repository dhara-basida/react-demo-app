import React from 'react';
import { action } from '@storybook/addon-actions';
import DeleteMovie from '../components/delete-movie/DeleteMovie';


export default {
    title: 'DeleteMovie',
    component: DeleteMovie,
};

export const Basic = () => (
    <DeleteMovie onDelete={action('Delete button clicked')} />
);
