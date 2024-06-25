import React from 'react';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput';
import AddCompanyButton from '../components/AddCompanyButton';
import Toolbar from '../components/Toolbar';
import CompanyTable from '../components/CompanyTable';
import CompanyRow from '../components/CompanyRow';
import { Status } from '../components/StatusLabel';

export interface PageProps {}

export default function Page(props: PageProps) {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput />
      </Toolbar>
      <CompanyTable>
        <CompanyRow
          id={1}
          category={'Products'}
          company={'Costco'}
          status={Status.Pending}
          promotion={true}
          country={'USA'}
          joinedDate={'02.10.2024'}
        />
      </CompanyTable>
    </>
  );
}
