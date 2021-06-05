import React from 'react'
import Spinner from './ui/Spinner'

export const Information = ({isLoading, item}) => {
    return isLoading ? (<Spinner />) : (
        <div>
            <h3 className={!item ? '' :'info' } color="text-white">{item}</h3>
        </div>
    )
}
