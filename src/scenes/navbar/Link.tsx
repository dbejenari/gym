import { SelectedPage } from '@/shared/types'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
  page: string
  selectedPage: string
  setSelectedPage: (value: SelectedPage) => void
  onClick?: () => void
}
export const Link = ({
  page,
  selectedPage,
  setSelectedPage,
  onClick,
}: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, '') as SelectedPage
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? 'text-primary-500' : ''}
            transition duration-500 hover:text-primary-300
        `}
      href={`#${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(lowerCasePage)
        if (onClick) onClick()
      }}
    >
      {page}
    </AnchorLink>
  )
}
