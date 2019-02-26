import React from 'react'

import Layout from 'layouts/main'
import Link from 'components/link'
import T from 'components/translate-message'

const SecondPage = () => (
  <Layout>
    <T message="second_title" component="h1" />
    <T message="second_welcome" component="p" />
    <T message="lorem-1" component="p" />
    <T message="lorem-2" component="p" />
    <T message="to_home" component={Link} to="/" />
  </Layout>
)

export default SecondPage
