import React from 'react';
import PropTypes from 'prop-types';
import { OptionsList, OptionsItem, Button }  from './FeedbackOptions.module';

const FeedbackOptions = ({ options, leaveFeedback }) => (
  <OptionsList>
    {options.map(option => (
      <OptionsItem key={option}>
        <Button name={option} type="button" onClick={leaveFeedback}>
          {option}
        </Button>
      </OptionsItem>
    ))}
  </OptionsList>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  leaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;