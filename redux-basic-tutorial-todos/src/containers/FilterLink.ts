import React from 'react'
import { VisibilityFilter } from '../actions'
import { NavLink } from 'react-router-dom'

const FilterLink = ({ filter, children }: { filter: VisibilityFilter, children: React.Component | string }) => (
    <NavLink
    exact
to = { filter === 'SHOW_ALL' ? '/' : `/${filter}` }
activeStyle = {{
    textDecoration: 'none',
        color: 'black'
}}
  >
    { children }
    < /NavLink>
)

export default FilterLink
