import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Logo from '@/assets/Logo.png'
import { Link } from './Link'
import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import { ActionButton } from '@/shared/ActionButton'
import LoginButton from '../LoginButton'
import LogoutButton from '../LogoutButton'
import { useAuth0 } from '@auth0/auth0-react'

type Props = {
  selectedPage: string
  isTopOfPage: boolean
  setSelectedPage: (value: SelectedPage) => void
}

export const Navbar = ({
  selectedPage,
  setSelectedPage,
  isTopOfPage,
}: Props) => {
  const flexBetween = 'flex items-center'
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')
  const navbarBackground = isTopOfPage ? '' : 'bg-primary-100 drop-shadow'
  const { user, isAuthenticated, logout } = useAuth0()

  const [storedUser, setStoredUser] = useState<any>(null)

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      setStoredUser(JSON.parse(userData))
    }
  }, [])

  useEffect(() => {
    if (isAuthenticated && user) {
      const userData = {
        picture: user.picture,
        name: user.name,
        email: user.email,
      }
      localStorage.setItem('user', JSON.stringify(userData))
      setStoredUser(userData)
    }
  }, [isAuthenticated, user])

  const handleLogout = () => {
    localStorage.removeItem('user')
    setStoredUser(null)
  }

  const closeMenu = () => setIsMenuToggled(false)

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <img src={Logo} alt="logo" />

            {/* RIGHT SIDE */}
            {isAboveMediumScreens && (
              <div className={`${flexBetween} gap-8 text-sm`}>
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Our Classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
            )}

            {/* AUTH BUTTONS */}
            <div className={`${flexBetween} ml-auto gap-8 whitespace-nowrap`}>
              {isAboveMediumScreens && storedUser && storedUser.picture && (
                <img
                  className="h-6 w-6 rounded-lg"
                  src={storedUser.picture}
                  alt="User"
                />
              )}
              {storedUser ? (
                <LogoutButton onLogout={handleLogout} />
              ) : (
                <LoginButton />
              )}
              {isAboveMediumScreens && (
                <ActionButton setSelectedPage={setSelectedPage}>
                  Become a member
                </ActionButton>
              )}
            </div>

            {/* MOBILE MENU BUTTON */}
            {!isAboveMediumScreens && (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={closeMenu}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              onClick={closeMenu}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              onClick={closeMenu}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              onClick={closeMenu}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              onClick={closeMenu}
            />
          </div>
        </div>
      )}
    </nav>
  )
}
