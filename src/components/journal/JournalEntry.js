import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div
                className="journal__entry-picture"
                style={{ 
                    backgroundSize: 'cover', 
                    backgroundImage: 'url(https://blog.ida.cl/wp-content/uploads/sites/5/2020/04/tamano-redes-blog-655x470.png)' }}
            ></div>
            <div className="journal__entry-body">
                    <p className="journal__entry-title">Un nuevo día</p>
                    <p className="journal__entry-content">Descripción un nuevo día</p>
            </div>
            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
