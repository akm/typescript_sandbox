import React from 'react'

const Link = ({ active, children, onClick }: { active: boolean, children: string, onClick: () => void }) => (
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

export default Link
