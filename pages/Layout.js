import {
  Icon,
  Input,
  Avatar,
  Button,
  ShellBar,
  ShellBarItem,
  ListItemStandard,
} from '@ui5/webcomponents-react';
import Head from 'next/head';

export default function Layout({children, title, dropdown, subDropdown}) {

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
      <ShellBar
        style={{width: '100%'}}
          logo={<img alt="SAP Logo" src="https://sap.github.io/ui5-webcomponents/images/sap-logo-svg.svg"/>}
          {...(dropdown && {
            primaryTitle: dropdown.title,
            menuItems: dropdown.data.map(({title, value}) => (
              <ListItemStandard data-key={value}>{title}</ListItemStandard>
            ))
          })}
          notificationsCount="10"
          onLogoClick={function ks(){}}
          onMenuItemClick={function ks(){}}
          onNotificationsClick={function ks(){}}
          onProductSwitchClick={function ks(){}}
          onProfileClick={function ks(){}}
          onSearchButtonClick={function ks(){}}
          profile={
            <Avatar>
            <img src="https://sap.github.io/ui5-webcomponents-react/v2/assets/Person-B7wHqdJw.png" />
            </Avatar>
          }
          searchField={<Input icon={<Icon name="search" />} showClearIcon/>}
          showNotifications
          showProductSwitch
        >
          <ShellBarItem
            icon="error"
            text="ShellBarItem"
            children={<img src='/eco.svg' className='w-4 h-4 bg-red-200' />}
          />
        </ShellBar>
        <div className='px-8 bg-white relative shadow-md h-[44px] flex items-center'>
          {
            (subDropdown && (
              <Button endIcon='navigation-down-arrow' style={{color: 'black'}}>
                {subDropdown.title}
              </Button>
            ))
          }
        </div>
      </nav>
      <main>
        {children}
      </main>
    </div>
  );
}