import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((items, idx) => idx < 4)
        .map(({ id, ...OtherItemProps }) => (
          <CollectionItem key={id} {...OtherItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
