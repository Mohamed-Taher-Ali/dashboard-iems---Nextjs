import { Button, DatePicker, Input } from '@ui5/webcomponents-react';
import { useMemo } from 'react';

import { InfoBlock, ItemsTable } from '../components';
import itemsData from '../items.json';

export async function getStaticProps() {
  return {
    props: {
      items: itemsData,
      title: 'Items',
      dropdown: {
        title: 'Items',
        data: [
          {
            title: 'link - 1',
            value: 'link - 1'
          },
          {
            title: 'link - 1',
            value: 'link - 1'
          },
          {
            title: 'link - 1',
            value: 'link - 1'
          },
        ]
      }
    },
  };
}

export default function Items({items}) {
  console.log({items});
  
  const data = useMemo(() => [
    {
      inputLabel: 'Contact Number:',
      input: <Input type="Text" placeholder='Placeholder Text' />
    },
    {
      inputLabel: 'Created On:',
      input: <DatePicker primaryCalendarType="Gregorian" />
    },
    {
      inputLabel: 'Created By:',
      input: <Button endIcon='navigation-down-arrow'
      style={{
        color: 'black',
        width: '200px',
        textAlign: 'start',
        borderRadius: '4px',
        borderInline: '1px solid #cac9c9',
        borderTop: '1px solid #cac9c9',
        borderBottom: '1px solid black',
      }}>List Item</Button>
    },
    {
      inputLabel: 'Customer Reference:',
      input: <Input type="Text" placeholder='Placeholder Text' />
    },
  ], [])

  return (
    <div>
      <div className='px-12 py-4 bg-white flex flex-col xl:flex-row gap-2 shadow-md '>
        <div className='flex gap-2 flex-wrap'>
          {
            data.map((info, ind) => (
              <InfoBlock data-key={ind} value={123456789} {...info}  />
            ))
          }
        </div>
        <div className='flex flex-grow justify-start md:justify-end items-end'>
        <Button
          style={{
            color: 'white',
            width: '200px',
           backgroundColor: '#0070F2'
          }}>Search</Button>
        </div>
      </div>
      <div className='px-8 py-5'>
        <ItemsTable data={items} />
      </div>
    </div>
  );
}
