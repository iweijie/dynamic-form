export interface IAny {
  [x: string]: any;
}

export interface IFormBasicProps extends IAny {
  // JSON 数据
  data: any;
  initialValues: any;
}

export interface IFormRendererProps extends IFormBasicProps {
  type: 'form';
}

export interface IFormViewProps extends IFormBasicProps {
  type: 'view';
}
