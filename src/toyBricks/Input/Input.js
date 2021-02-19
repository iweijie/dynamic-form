import wrap from '@/hoc/wrap/hooks';
import * as RawInput from './combine';

export const identifiers = RawInput.identifiers || {};
const Input = wrap(RawInput);

Object.assign(Input, identifiers);

export default Input;
