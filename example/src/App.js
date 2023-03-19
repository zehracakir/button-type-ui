import React from 'react'

import { Button } from 'button-type-ui'
import 'button-type-ui/dist/index.css'

const App = () => {
  return(
  <>
    <Button text="Text Button" type="text"/>
    <br /><br />
    <Button text="Default Button " type="default"/>
    <br /><br />
    <Button text="Dashed Button" type="dashed"/>
    <br /><br />
    <Button text="Primary Button" type="primary"/>
    <br /><br />
    <Button text="Link Button" type = "link"/>
  </>
  )
}

export default App
