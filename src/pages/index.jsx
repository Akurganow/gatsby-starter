import React from 'react'

import Layout from 'layouts/main'
import Link from 'components/link'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <Link to="/settings">Go to settings</Link>
  </Layout>
)

export default IndexPage
