import React from 'react'
import { GenericProperty } from 'src/DeployTriggersApp/pages/GenericRenderer/GenericProperty'

export interface GenericRendererProps {
  json: string
}

export const GenericRenderer: React.FC<GenericRendererProps> = ({ json }) => {
  const data = JSON.parse(json)
  return (
    <>
      <GenericProperty data={data}></GenericProperty>
    </>
  )
}
