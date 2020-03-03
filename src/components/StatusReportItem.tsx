import React, { Fragment } from 'react'
import { ListGroupItem, Badge } from 'react-bootstrap'

export interface IStatusReportItemProps {
  status?: any
}

const StatusReportItem = (props: IStatusReportItemProps) => {
  return (
    <Fragment>
      {props.status.map((stat: any) => (
        <ListGroupItem>
          <h2>
            <Badge variant="secondary">{stat.number}</Badge> {stat.statOption}
          </h2>
        </ListGroupItem>
      ))}
    </Fragment>
  )
}

export default StatusReportItem
