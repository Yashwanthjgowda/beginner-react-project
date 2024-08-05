import React, { Fragment } from 'react'
import { styles } from './../object-style/style';

const StyledComponent = () => {
  return (
    <Fragment>
      <div className='container'>
      <div className='row'>
        <div className='col'>
        <div style={styles.Container}>
            <h2 style={styles.Header}>6) STYLED COMPONENT</h2>
        </div>
        </div>
        </div>
        </div>
        <Deepika>DEEPIKA</Deepika>
    </Fragment>
  )
}

export default StyledComponent
