'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  let newState = { ...state };
  const res = [];

  for (const action of actions) {
    const { type } = action;

    if (type === 'addProperties') {
      const { extraData: data } = action;

      newState = { ...newState, ...data };
    }

    if (type === 'removeProperties') {
      const { keysToRemove: data } = action;

      for (const key of data) {
        delete newState[key];
      }
    }

    if (type === 'clear') {
      newState = {};
    }

    res.push({ ...newState });
  }

  return res;
}

module.exports = transformStateWithClones;
