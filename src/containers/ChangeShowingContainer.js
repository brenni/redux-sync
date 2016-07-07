import React from 'react';
import { connect } from 'react-redux';
import { changeShowing } from '../actions';
import { updateAddForm } from '../actions';
import ChangeShowing from '../components/ChangeShowing';

const createShowingText = (showingState) => {
  switch (showingState) {
    case false:
      return 'Show Completed';
      break;
    case true:
      return 'Show Uncompleted';
      break;
    default:
      return 'Error Generating Button Text';
      break;
  }
};

const mapStateToProps = (state) => {
  return {
    buttonText: createShowingText(state.showing),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeShowing: () => {
      dispatch(changeShowing())
    },
  }
};

const ChangeShowingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeShowing);

export default ChangeShowingContainer;
