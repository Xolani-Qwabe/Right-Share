import React from 'react'


async function Thread({params}: {params: {threadId: string}}) {
    const {threadId} = await params;
  return (
    <div>One Thread id no : {threadId}</div>
  )
}

export default Thread