import Input from './components/Input/index';
import Select from './components/Select/index';
import formRendererRegistry from './helper/Registry';

formRendererRegistry.registry({
  type: 'Input',
  component: Input,
});

formRendererRegistry.registry({
  type: 'Select',
  component: Select,
});
