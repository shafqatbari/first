import NumberFormat from 'react-number-format';

export function RNformat({ value }) {
  return (
    <NumberFormat
      value={value}
      displayType={'text'}
      thousandSeparator={true}
      prefix={'Rs'}
      renderText={formattedValue => <Text>{formattedValue}</Text>}
    />
  );
}