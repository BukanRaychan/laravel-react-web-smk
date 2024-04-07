import React from 'react'

function Jurusan({title = "null", visi = "null", misi = "null"}) {
  return (
    <div>
      <h2>Title: {title}</h2>
      <p>Visi: {visi}</p>
      <p>Misi: {misi}</p>
    </div>
  )
}

export default Jurusan