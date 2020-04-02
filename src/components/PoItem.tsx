import React, { Fragment } from 'react'

export interface IPoItemProps {
  list?: any
}

const PoItem = (props: IPoItemProps) => {
  return (
    <Fragment>
      {props.list.map((ps: any) => (
        <div>
          <h6>{ps.poNumber}</h6>
          <h6>Status: {ps.poStatus}</h6>
        </div>
      ))}
    </Fragment>
  )
}

export default PoItem
