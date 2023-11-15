import {PersonCard} from './person-card'
import {PersonSkills} from './skills'
import './app.css'

export function App() {
    return (
    <>
        <div className='sc'>
            <PersonCard 
            username='MrDavid'
            description={'Hey! This is my first react practice. Hope you like it and below are some of my skills!'}
            />
            <PersonSkills
            icon='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png'
            name='CSS'
            />
            <PersonSkills
            icon='https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png'
            name='react'
            />
            <PersonSkills
            icon='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png'
            name='javascript'
            />
            <PersonSkills
            icon='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png'
            name='python'
            />
        </div>
    </>
    )
}