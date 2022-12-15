import { useEffect } from 'react'

export const RequireAuth = ({ children }) => {
  const userToken = sessionStorage.getItem('token')

  useEffect(() => {
    const tokenObj = { token: userToken }
    fetch('http://localhost:3001/login/verify-token', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tokenObj)
    }).then(response => response.json())
      .then(data => {
        if (!data.verify) {
          window.location.replace("/login")
        }
      })
  }, [children, userToken])

  return children
}
