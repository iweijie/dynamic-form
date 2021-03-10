import React, { useCallback } from 'react';
import { ConnectRC, Loading, connect } from 'umi';
import Renderer from './FormRenderer';
import json from './json';

const DynamicForm = ({ components, dispatch, items }) => {
  return <Renderer data={json} />;
};

export default connect(({ form }) => {
  return {
    components: form.components,
    items: form.items,
  };
})(DynamicForm);
