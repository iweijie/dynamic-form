import React from 'react';

export function noop() {
  return null;
}

export function id(fn) {
  return (...args) => fn(...args);
}

export function findIdentifierChildren(children, identifier) {
  const foundIdentifier = React.Children.toArray(children).find(
    (child) => child.type === identifier,
  );
  return foundIdentifier ? foundIdentifier.props.children : null;
}

export const markerChild = (children, identifiers = {}) => {
  const newChildren = [];
  const identifiersChildren = {};
  React.Children.forEach(children, (child) => {
    let isIdentifier = false;
    Object.keys(identifiers).forEach((key) => {
      if (child && identifiers[key] === child.type) {
        isIdentifier = true;
        identifiersChildren[key] = child.props.children;
      }
    });
    if (!isIdentifier) {
      newChildren.push(child);
    }
  });

  return {
    children: newChildren,
    identifiers: identifiersChildren,
  };
};

export default () => {};
