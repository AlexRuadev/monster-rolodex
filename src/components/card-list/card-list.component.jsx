import React from 'react';
import { Card } from '../card/card.component'

import './card-list.styles.css';

export const CardList = props => {
    return <div className="card-list">
        {
            // map returns us the return of whatever function we pass into it 
            props.monsters.map( monster => (
                <Card key={monster.id} monster={monster} />
            ) )
        }
    </div>
}