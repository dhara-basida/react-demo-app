import React from 'react';
import SortControl from '../components/sort-control/SortControl';

export default {
    title: 'SortControl',
    component: SortControl
}

export const Basic = (args) => <SortControl {...args} />;
Basic.args = {
    currentSelection: "title",
    onSortChange: "releaseDate"
};
