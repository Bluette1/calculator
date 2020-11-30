import React from 'react';
import PropTypes from 'prop-types';
import ButtonPanel from './ButtonPanel';

const ButtonGroups = props => {
  const { groups } = props;

  return (
    groups.map((btnPanel, idx) => (
      <React.Fragment key={Object.keys(btnPanel)[0]}>
        <ButtonPanel itemList={btnPanel[`itemList${idx}`]} />
      </React.Fragment>
    ))
  );
};
ButtonGroups.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default ButtonGroups;
