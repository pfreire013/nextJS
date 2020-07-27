import React from 'react'
import styled from 'styled-components';

import Link from 'next/link';
import Head from 'next/head'

import withAnalytics from '~/hocs/withAnalytics';

const Title = styled.h1`
  color: #069;
  font-size: 40px;
  font-family: Arial, Helvetica, sans-serif;
`

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <img src="/static/panda-chiling.jpg" width="200" />
    <Title>Hello world!</Title>
    <Link href="/users">
      <a>Usuários</a>
    </Link>
  </div>
);

export default withAnalytics()(Home);