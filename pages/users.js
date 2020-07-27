import React from 'react'
import Axios from 'axios';

import Link from 'next/link'
import Head from 'next/head'

import withAnalytics from '../src/hocs/withAnalytics';

const User = ({ users }) => (
  <div>
    <Head>
      <title>Usuários</title>
    </Head>
    <ul>
      {
        users.map(user => (
        <li key={user.id}>
          {user.login}
          <Link href={`/users/${user.login}`}>
            <a>Acessar perfil</a>
          </Link>
          </li>
        ))
      }
    </ul>
    <Link href="/">
      <a>Voltar</a>
    </Link>
  </div>
)

User.getInitialProps = async () => {
  const response = await Axios.get(
    'https://api.github.com/orgs/rocketseat/members'
  )

  return { users: response.data}
}


export default withAnalytics()(User);