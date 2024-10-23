import { Label, Text } from '@ui5/webcomponents-react';

export function InfoBlock({value, inputLabel, input}) {
  return (
    <div className='flex flex-col gap-4 justify-center'>
      <div>
        <Label>input</Label>
        <Text style={{fontWeight: 'bold'}}>{value}</Text>
      </div>
      <div className='flex flex-col '>
        <Label>{inputLabel}</Label>
        {input}
      </div>
    </div>
  );
}
