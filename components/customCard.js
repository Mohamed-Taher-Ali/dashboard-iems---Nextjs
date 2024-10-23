import { Card, Icon, CardHeader } from "@ui5/webcomponents-react";

export function CustomCard({title, color}) {
  return (
    <Card 
        className="w-[176px] h-[176px]"
        header={<CardHeader titleText={title} />}
    >
    <div className="absolute flex justify-start items-end h-[75%] w-full p-4 pt-0 pb-4">
      <Icon name='search' style={{width: '24px', height: '24px', color, }}/>
    </div>
  </Card>
  );
}