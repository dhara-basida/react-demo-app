import React, { useState } from 'react';
import SortControl from '../components/sort-control/SortControl';

export default {
    title: 'SortControl',
    component: SortControl
}

export const Basic = (args) => {
    const [currentSelection, setCurrentSelection] = useState(args.currentSelection)
    const handleOnSortChange = (value) => {
        console.log('onSortChange value', value);
        setCurrentSelection(value);
    };
    return <SortControl currentSelection={currentSelection} onSortChange={handleOnSortChange} />
}
Basic.args = {
    currentSelection: 'title',
  }
