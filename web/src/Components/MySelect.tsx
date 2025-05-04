import Select, { StylesConfig } from 'react-select';

type OptionType = {
  value: string;
  label: string;
};

const options: OptionType[] = [
  { value: 'opcao1', label: 'Opção 1' },
  { value: 'opcao2', label: 'Opção 2' },
  { value: 'opcao3', label: 'Opção 3' },
];

const customStyles: StylesConfig<OptionType, false> = {
  control: (base) => ({
    ...base,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: 'none',
    borderRadius: '8px',
    padding: '4px 8px',
    color: '#949393',
    boxShadow: 'none',
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: '#222',
    borderRadius: '8px',
    zIndex: 10,
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? '#4fc3f7' : '#222',
    color: '#fff',
    padding: '10px 15px',
    cursor: 'pointer',
  }),
  singleValue: (base) => ({
    ...base,
    color: '#fff',
  }),
};

export const MySelect = () => (
  <Select<OptionType, false> options={options} styles={customStyles} />
);
