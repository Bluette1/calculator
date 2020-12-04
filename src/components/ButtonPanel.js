import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = props => {
  const { itemList, handleClick } = props;
  return (
    <div>
      {itemList.map(item => (
        <React.Fragment key={item}>
          <Button value={item} onclick={handleClick} />
        </React.Fragment>
      ))}
    </div>
  );
};

ButtonPanel.propTypes = {
  itemList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
ButtonPanel.propTypes = { handleClick: PropTypes.func.isRequired }

export default ButtonPanel;
