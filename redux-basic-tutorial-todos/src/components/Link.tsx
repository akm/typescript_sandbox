import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, children, onClick }: { active: boolean, children: React.Component, onClick: () => void }) => (
    <button
        onClick={onClick}
        disabled={active}
        style={{
            marginLeft: '4px',
        }}
    >
        {children}
    </button>
)

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link
