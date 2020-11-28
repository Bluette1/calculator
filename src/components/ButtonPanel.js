import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = props => {
  const { itemList } = props;
  return (
    <div>
      {itemList.map(item => (
        <React.Fragment key={item}>
          <Button value={item} key={item} />
        </React.Fragment>
      ))}
    </div>
  );
};
ButtonPanel.propTypes = {
  itemList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default ButtonPanel;
