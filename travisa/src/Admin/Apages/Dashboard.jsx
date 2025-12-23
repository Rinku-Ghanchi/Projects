import React from 'react'
import AHeader from '../Acoman/AHeader'
import ANavs from '../Acoman/ANavs'

function Dashboard() {
    return (
        <div>
            <AHeader />
            <ANavs title="Dashboard Manager" name="Dashboard" />
            <h1 className='text-center my-4'>Welcome Admin Dashborad</h1> 
        </div>
    )
}

export default Dashboard
