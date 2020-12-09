import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../ButtonPanel.css';

const ButtonPanel = props => {
  const { itemList, handleClick } = props;
  const lastButtons = ['=', '+', 'x', '÷', '-'];
  return (
    <div className="buttonGroup">
      {itemList.map(item => (
        <React.Fragment key={item}>
          <Button value={item} onclick={handleClick} wide={item === '0'} color={lastButtons.includes(item) ? undefined : '#f6f6f6'} />
        </React.Fragment>
      ))}
    </div>
  );
};

ButtonPanel.propTypes = {
  itemList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
ButtonPanel.propTypes = { handleClick: PropTypes.func.isRequired };

export default ButtonPanel;
