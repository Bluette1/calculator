import React from 'react';
import PropTypes from 'prop-types';
import ButtonPanel from './ButtonPanel';

const ButtonGroups = props => {
  const { groups, id } = props;
  return (
    <div>
      <React.Fragment key={id}>
        {groups.forEach(btnPanel => (
          <ButtonPanel itemList={btnPanel.itemList} id={btnPanel.key} />
        ))}
      </React.Fragment>
    </div>
  );
};
ButtonGroups.propTypes = { id: PropTypes.string.isRequired };
ButtonGroups.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default ButtonGroups;
