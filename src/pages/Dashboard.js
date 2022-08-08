import React from 'react'
//components
import TicketCard from '../components/TicketCard'

const Dashboard = () => {

    const tickets = [
        {
            category: 'Q1 2022',
            color: 'red',
            title: 'jojojojo',
            owner: 'carola',
            avatar: '',
            status: 'done',
            priority: '5',
            progress: '40',
            description: 'exercises freeCodeCamp',
            timestamp: ''
        },
        {
            category: 'Q2 2022',
            color: 'red',
            title: 'dxxddxddxd',
            owner: 'carola',
            avatar: '',
            status: 'working on it',
            priority: '2',
            progress: '70',
            description: '',
            timestamp: '2022-02-15T07:36:17+0000'
        },
        {
            category: 'Q2 2022',
            color: 'blue',
            title: 'huhuhuhuhu',
            owner: 'carola',
            avatar: '',
            status: 'working on it',
            priority: '3',
            progress: '10',
            description: '',
            timestamp: '2022-02-12T07:36:17+0000'
        }
    ]

    const colors = [
        'rgb(255,179,186)',
        'rgb(255,223,186)',
        'rgb(255,255,186)',
        'rgb(186,255,201)',
        'rgb(186,255,255)'
    ]

    const uniqueCategories = [...new Set(tickets?.map(({category})=> category))]
    console.log(uniqueCategories)

    return (
        <div className='dashboard'>
            <h1>My Proyects</h1>
            <div className='ticket-container'>
                {tickets && uniqueCategories?.map((uniqueCategory, indexCategory) => (
                    <div key={indexCategory}>
                        <h3>{uniqueCategory}</h3>
                        {tickets.filter(ticket => ticket.category === uniqueCategory).map((filteredTicket, _index) => 
                        <TicketCard
                            id={_index}
                            color={colors[indexCategory] || colors[0]}
                            ticket={filteredTicket}

                        />)
                        
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dashboard
