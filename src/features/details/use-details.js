import {
  clearDetails,
  loadCountryByName,
  selectDetails,
} from './details-slice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useDetails = (name) => {
  const details = useSelector(selectDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCountryByName(name));
    return () => {
      dispatch(clearDetails());
    };
  }, [name, dispatch]);
  console.log('details =>>', details);
  return details;
};
