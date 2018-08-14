import React from 'react'
import { Link } from 'gatsby'
import Button from '@material-ui/core/Button';

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Button variant="outlined" color="primary">Hello</Button>
    <Button variant="contained" color="secondary">World</Button>
  </Layout>
)

export default IndexPage
