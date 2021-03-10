import wrap from '@/hoc/wrap/hooks';
import * as RawSelect from './combine';

export const identifiers = RawSelect.identifiers || {};
const Select = wrap(RawSelect);

Object.assign(Select, identifiers);

export default Select;
