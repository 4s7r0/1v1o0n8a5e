import React, { useState, useEffect, Fragment } from 'react'
import styled from 'styled-components'
import { color } from 'styled-system'
import { NavLink, Route } from "react-router-dom"
import theme from "../settings/theme"
import routes from "../pages/routes"
import Logo from "../components/Logo"
import Sidebar from "react-sidebar"
import useWindowSize from "../hooks/useWindowSize"
import useInputState from "../hooks/useInputState"
import useStateWithLocalStorage from "../hooks/useStateWithLocalStorage"

const SidebarHeader = styled.div`
  padding: 34px;
  font-family: "Aldrich", sans-serif;
  font-size: 1em;
  min-height: 10vh;
  ${color}
`

const AppHeader = styled.div`
  tag: header;
  direction: row;
  align: start;
  justify: start;
  background: ${theme.global.colors.brand};
  padleft: 50px;
  padright: 15px;
  padvertical: 15px;
  zindex: 1;
  overflow: hidden;
  height: auto;
  minheight: 6rem;
`

const SidebarBody = styled.div`
  margin-top: 20px;
  margin-left: 10vw;
  margin-right: 10vw;
  text-align: left;
  ${color}
`

const AppTitle = styled.div`
  display: inline-flex;
  flex-direction: row;
  margin: 10px;
  font-weight: 900;
  font-family: "Aldrich", sans-serif;
  font-size: calc(2.5em + 2vmin);
`

const Button = styled.button`
  border: 0;
  font-size: calc(2.5em + 2vmin);
  line-height: 1.45rem;
  background: transparent;
  ${color}
`
const SearchField = styled.input`
  font-family: "Aldrich", sans-serif;
  font-size: 4rem;
  text-align: left;
  border: 0;
  color: ${theme.global.colors.search};
  background-color: transparent;
`

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title
  })
}

const SidebarMenu = () => {
  const [sidebarDocked, setSidebarDocked] = useState(false)
  const [open, setSidebarOpen] = useState(false)
  const name = useInputState("1v1o0n8a5e")
  const size = useWindowSize()
  const [value, setValue] = useStateWithLocalStorage("SearchFieldValue")
  useDocumentTitle(value)

  const nameWidth = size.width - size.width / 2 + "px"
  const onChange = event => setValue(event.target.value)

  function onSetSidebarDocked(dock) {
    setSidebarDocked(dock)
  }

  function onSetSidebarOpen(opn) {
    setSidebarOpen(opn)
  }

  const markActive = (match, location) => {
    if (!match) {
      return false
    }
    return true
  }

  return(
    <Sidebar
          sidebar={
            <div
              style={{
                textAlign: "center",
                margin: "0",
                paddingTop: "1rem",
                fontFamily: "Electrolize",
                fontSize: "1.5em",
                background: theme.global.colors.fill_gray,
                height: "100vh"
              }}
            >
              <SidebarHeader>v0.1.0</SidebarHeader>
              <ul>
                {routes.map(route => {
                  if (route.path === "/") {
                    return <Fragment key={route.id}></Fragment>
                  } else {
                    return (
                      <li key={route.id}>
                        <NavLink
                          exact
                          to={route.path}
                          isActive={markActive}
                          className='noselect'
                          activeClassName='navselect'
                        >
                          {route.sidebar}
                        </NavLink>
                      </li>
                    )
                  }
                })}
              </ul>
            </div>
          }
          styles={{
            sidebar: {
              top: null,
              width: "10vw",
              minWidth: "185px",
              backgroundColor: theme.global.colors.fill_gray,
              margin: "0",
              padding: "0"
            }
          }}
          docked={sidebarDocked}
          open={open}
          onSetOpen={onSetSidebarOpen}
          touch
        >
          <AppHeader>
            <AppTitle>
              <Button
                color={theme.global.colors.search}
                onClick={() => onSetSidebarDocked(!sidebarDocked)}
              >
                <Logo />
              </Button>
              <SearchField
                name={name.value}
                value={value}
                onChange={onChange}
                className='text-pulse'
                width={nameWidth}
                spellCheck='false'
              />
            </AppTitle>
          </AppHeader>
          <SidebarBody>
            {routes.map(route => (
              <Route
                key={route.id}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </SidebarBody>
        </Sidebar>
  )
}

export default SidebarMenu