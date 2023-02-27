import React from 'react'
import styled from 'styled-components'

export interface GenericPropertyProps {
  data: any
}

const Table = styled.table`
  table-layout: fixed;
  border-collapse: collapse;
`

const Key = styled.td`
  vertical-align: top;
  text-align: right;
  background-color: #eee;
  font-weight: bold;
  padding: 0 10px;
`
const Val = styled.td`
  text-align: left;
  vertical-align: top;
  padding: 0 10px;
`

const Row = styled.tr`
  padding: 0;
`
export const GenericProperty: React.FC<GenericPropertyProps> = ({ data }) => {
  function isObject(data: Object): boolean {
    return typeof data === 'object' && !Array.isArray(data) && data !== null
  }
  function isArray(data: any): boolean {
    return Array.isArray(data)
  }

  return (
    <Table>
      {isObject(data) ? (
        Object.keys(data).map((key: string, index: number) => {
          const value = data[key]
          const isLeaf = !isObject(value) && !isArray(value)

          return (
            <Row key={`prop${index}`}>
              <Key>{key}</Key>
              {isLeaf ? <Val>{value}</Val> : <GenericProperty data={value} />}
            </Row>
          )
        })
      ) : isArray(data) ? (
        data.map((node: any, index: number) => (
          <GenericProperty key={`item${index}`} data={node} />
        ))
      ) : (
        <Val colSpan={2}>{data}</Val>
      )}
    </Table>
  )
}
