import React, { Component } from 'react';
import {Table} from 'reactstrap'
import Items from './ItemsTable'

const ids = ['1']
const EditTable = ({id})=>{
  return(
        
                <Table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Sales</th>
                      <th>Value</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    id?.map((item,index)=>{
                      return( <Items  
                      id={item}
                      index={index} 
                      />)
                     
                    })
                   
                  }
                  </tbody>
                </Table>
   
    )
}


export default EditTable