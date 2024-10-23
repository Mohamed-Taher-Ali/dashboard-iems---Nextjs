import { Table, TableCell, TableHeaderCell, TableHeaderRow, TableRow } from "@ui5/webcomponents-react";

export function ItemsTable({data}) {
  const header = [
    'ID',
    'BA',
    'QT',
    'IN',
    'BEG',
    'P QT',
    '%',
    ['FRI', '10 JUN', '2024'],
    ['FRI', '10 JUN', '2024'],
    ['FRI', '10 JUN', '2024'],
    ['FRI', '10 JUN', '2024'],
    ['FRI', '10 JUN', '2024'],
    ['FRI', '10 JUN', '2024'],
    ['FRI', '10 JUN', '2024'],
  ]
  
  return (
<Table
style={{height: '600px'}}
  headerRow={
  <TableHeaderRow sticky>
    {
      header.map(h => (
        <TableHeaderCell style={{justifyContent: 'center', border: '1px solid #E5E5E5', backgroundColor: '#F5F6F7'}}>
          {
            typeof h === 'string'
            ? <span>{h}</span>
            : <div className="w-full flex flex-col items-center justify-center"> <div>FRI</div> <div>10 JUN</div> <div>2024</div> </div>
          }
      </TableHeaderCell>
      ))
    }
  </TableHeaderRow>
  }
>
  {
    data.map((row, rInd) => (
      <TableRow data-key={rInd}>
        {
          Object.values(row).map((cell, cInd) => (
            <TableCell data-key={cInd} style={{justifyContent: 'center', border: '1px solid #E5E5E5'}}>
              <span >
                {cell}
              </span>
            </TableCell>
          ))
        }
      </TableRow>

    ))
  }
</Table>
  );
}