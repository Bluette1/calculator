import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = props => {
  const { itemList, id } = props;
  return (
    <div>
      <React.Fragment key={id}>
        {itemList.forEach(item => (
          <Button>{item}</Button>
        ))}
      </React.Fragment>
    </div>
  );
};
ButtonPanel.propTypes = { id: PropTypes.string.isRequired };
ButtonPanel.propTypes = {
  itemList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default ButtonPanel;
