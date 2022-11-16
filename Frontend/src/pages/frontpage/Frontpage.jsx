import React from 'react'
import { Alert } from '../../components/Alert/Alert'
import { Attendancebar } from '../../components/attendancebar/Attendancebar'
import { Front } from '../../components/front/Front'


export const Frontpage = () => {
  return (<>
    <Front />
    <Attendancebar />
    <Alert />

  </>
  )
}
