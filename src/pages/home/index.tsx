import { Helmet } from 'react-helmet'
import { SearchField } from 'src/components/SearchField'

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
