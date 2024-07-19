import { Helmet } from 'react-helmet'
import { SearchField } from 'src/components/SearchField'
import React from 'react'

// TODO: add cat errors

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{'title'}</title>
      </Helmet>
      <SearchField />
    </>
  )
}
