import React from 'react';
import topContext from './context/top';
import Renderer from './Renderer';
import View from './View';
import { IFormRendererProps, IFormViewProps } from './type';

export default (props: IFormRendererProps | IFormViewProps) => {
  const { type } = props;
  if (type === 'form') return <Renderer {...props} />;
  if (type === 'view') return <View {...props} />;

  throw new Error('type is error');
};
