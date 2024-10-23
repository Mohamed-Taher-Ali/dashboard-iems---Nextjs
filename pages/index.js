import Link from "next/link";
import { CustomCard } from "../components";

export async function getStaticProps() {
  return {
    props: {
      title: 'Dashboard',
      dropdown: {
        title: 'Home',
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
      },
      subDropdown: {
        title: 'Overview',
        data: [
          {
            title: 'link - 1',
            value: 'link - 1'
          },
        ]
      },
    },
  };
}

export default function Dashboard() {
  const cards = [
    {
      title: 'Items Page',
      color: '#0070F2'
    },
    {
      title: 'List',
      color: '#F22400'
    },
    {
      title: 'List',
      color: '#A500F2'
    },
    {
      title: 'List',
      color: '#0070F2'
    },
  ]

  return (
    <div style={{paddingInline: '2rem'}}>
      <div className="text-2xl font-semibold py-4 px-3">Overview</div>
      <div className="flex gap-4 flex-wrap">
        {
          cards.map((cardProps) => (
            <CustomCard {...cardProps} />
          ))
        }
      </div>
      <div className="mt-4">
        <Link href='/items'>{'goto Items'}</Link>
      </div>
    </div>
  );
}