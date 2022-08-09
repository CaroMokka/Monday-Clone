import React from 'react'
import { useState, useEffect, useContext} from 'react'
import axios from 'axios'
//components
import TicketCard from '../components/TicketCard'
//contexto
import CategoriesContext from '../context'

const Dashboard = () => {
    const [tickets, setTickets] = useState(null)
    console.log(tickets)
    const { categories, setCategories } = useContext(CategoriesContext)

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:8000/tickets')
            const dataObject = response.data.data
            const arrayOfKeys = Object.keys(dataObject)
            const arrayOfData = Object.keys(dataObject).map((key) => dataObject[key])

            const formattedArray = []
            arrayOfKeys.forEach((key, index) => {
            const formattedData = { ...arrayOfData[index] }
            formattedData['documentId'] = key
            formattedArray.push(formattedData)

            //console.log(formattedArray)
            setTickets(formattedArray)
            })
        }
        fetchData()
        
    },[])

    console.log(tickets)    
    useEffect(() => {
        setCategories(
            [
                ...new Set( tickets?.map( ({ category })  => category ) )
        ]
        
        )
        
        
    },[tickets, setCategories])

    console.log(categories)


    const colors = [
        'rgb(255,179,186)',
        'rgb(255,223,186)',
        'rgb(255,255,186)',
        'rgb(186,255,201)',
        'rgb(186,255,255)'
    ]

    const uniqueCategories = [
        ...new Set(tickets?.map(({ category }) => category))
    ]

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









