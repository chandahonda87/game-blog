import React from 'react'
import Container from '../container/Container'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import LogoutBtn from './LogoutBtn'

function Header() {
    const authStatus = useSelector((state) => state.auth.status)
    console.log('Auth status:', authStatus); // Debugging line

    const navigate = useNavigate()

    const navItems = [
        {
            name: 'Home',
            slug: '/',
            active: true
        },
        {
            name: 'Blog',
            slug: '/blog',
            active: !authStatus
        },
        {
            name: 'Art',
            slug: '/art',
            active: !authStatus
        },
        {
            name: 'Login',
            slug: '/login',
            active: !authStatus
        },
        {
            name: 'Signup',
            slug: '/signup',
            active: !authStatus
        }

    ]

  return (
    <header className='py-3 shadow  bg-cyan-100 bg-opacity-50 '>
    <Container>
          <nav className='flex'>
              <div className='mr-4'>
                  <Link to="/">
                      <h1 className ='leckerli-one-regular'>C_HondaGaming</h1>
                  </Link>
              </div>
              <ul className='flex ml-auto'>
                  {
                      navItems.map((item) => item.active ? (
                          <li key={item.name}>
                              <button
                              onClick={() => navigate(item.slug)}
                              className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full oleo-script-regular'
                              >
                                  {item.name}
                              </button>
                          </li>
                      ) : null)
                  }
                  {
                  authStatus && (
                      <li className='oleo-script-regular'>
                          <LogoutBtn />
                      </li>
                  )
                  }
              </ul>
          </nav>
    </Container>
  </header>
  )
}

export default Header