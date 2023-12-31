import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Search } from './Search';
import { CustomSelect } from './CustomSelect';
import { selectRegion } from './controls-slice';
import { setRegion } from './controls-slice';
import { useRegion } from './use-region.js';
const optionsMap = {
  Africa: { value: 'Africa', label: 'Africa' },
  America: { value: 'America', label: 'America' },
  Asia: { value: 'Asia', label: 'Asia' },
  Europe: { value: 'Europe', label: 'Europe' },
  Oceania: { value: 'Oceania', label: 'Oceania' },
};
const options = Object.values(optionsMap);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Controls = () => {
  const [region, handleSelect] = useRegion();
  return (
    <Wrapper>
      <Search />
      <CustomSelect
        options={options}
        placeholder='Filter by Region'
        isClearable
        isSearchable={false}
        value={optionsMap[region]}
        onChange={handleSelect}
      />
    </Wrapper>
  );
};
