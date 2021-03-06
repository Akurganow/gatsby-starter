import React from 'react'

import Layout from 'layouts/main'
import Link from 'components/link'
import T from 'components/translate-message'

const IndexPage = () => (
  <Layout>
    <T message="title" component="h1" />
    <T message="welcome" component="p" />
    <T message="lorem-1" component="p" />
    <T message="lorem-2" component="p" />
    <T message="to_second_page" component={Link} to="/page-2" />
  </Layout>
)

export default IndexPage
