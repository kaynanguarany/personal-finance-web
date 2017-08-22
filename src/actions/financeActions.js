import { FINANCE_LIST } from './contants';
import { LIST_LOADED } from './types';

export const loadList = () => {
  return {
    type: LIST_LOADED,
    payload: FINANCE_LIST
  };
};