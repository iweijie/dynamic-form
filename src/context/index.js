import React, { useMemo, createContext, useContext } from 'react';
import { isEmpty, get, noop } from 'lodash';

const context = {};

export const GlobalContext = createContext({});

export const getContext = (uuid) => {
  if (!context[uuid]) {
    context[uuid] = createContext({});
  }
  return context[uuid];
};

export default (uuid) => {
  return getContext(uuid);
};
