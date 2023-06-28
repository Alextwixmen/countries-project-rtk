import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadCountries } from './countries-slice';
import { selectVisibleCountris } from './countries-slice';
import { selectControls } from '../controls/controls-slice';
import { selectCountriesInfo } from './countries-slice';
import { useEffect } from 'react';
export const useCountries = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status, error, qty } = useSelector(selectCountriesInfo);
  const { search, region } = useSelector(selectControls);

  const countries = useSelector(
    (state) => selectVisibleCountris(state, { search, region }),
    1000
  );
  useEffect(() => {
    if (!qty) {
      dispatch(loadCountries());
    }
  }, [qty, dispatch]);
  return [countries, { status, error, qty }];
};
