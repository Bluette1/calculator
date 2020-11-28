import React from 'react';
import PropTypes from 'prop-types';
import ButtonPanel from './ButtonPanel';

const ButtonGroups = props => {
  const { groups } = props;
  return (
    <div>
      {groups.map(btnPanel => (
        <React.Fragment key={btnPanel.key}>
          <ButtonPanel itemList={btnPanel.itemList} />
        </React.Fragment>
      ))}
    </div>
  );
};
ButtonGroups.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default ButtonGroups;
