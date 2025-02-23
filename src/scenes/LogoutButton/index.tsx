import { useAuth0 } from '@auth0/auth0-react'

type Props = {
  onLogout: () => void
}

const LogoutButton = ({ onLogout }: Props) => {
  const { logout } = useAuth0()

  return (
    <button
      onClick={() => {
        logout({ logoutParams: { returnTo: window.location.origin } })
        onLogout()
      }}
    >
      Log Out
    </button>
  )
}

export default LogoutButton
