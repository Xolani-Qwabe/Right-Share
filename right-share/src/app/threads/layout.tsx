import React from 'react'

function ThreadsLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div>
            <div><h1>Nav</h1></div>
            <div><h1>Sidebar</h1></div>
            {children}
            <div><h1>Footer</h1></div>
        </div>

    )
}

export default ThreadsLayout