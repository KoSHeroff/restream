import { useEffect, useState } from 'react'
import axios from 'axios'

import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import './App.css'

function App() {
    const [ streamHosts, setStreamHosts ] = useState(undefined);

    useEffect(() => {
        if (streamHosts == undefined) getHosts(setStreamHosts)
    })

    const getHosts = async (callback) => {
        axios.get('/stream')
            .then(res => callback(res.data))
            .catch(res => callback(null))
    }

    return (
        <div className='streams-wrapper'>
            {!!streamHosts &&
                streamHosts.map(elem => (
                    <div key={elem.id} className='stream'>
                        <div className='stream-info'>
                            <div className={'stream-info-active' + (elem.active ? ' active' : ' stop')} title={'Статус: ' + (elem.active ? 'Активен' : 'Не активен')}></div>
                            <div className='stream-info-name'><span className='stream-info-addition'>name: {!elem.description && "Отсутствует"}</span> {elem.description}</div>
                            <div className='stream-info-url'>
                                <span className='stream-info-addition'>host:</span>
                                <input value={`rtmp://cyberpolytech.ru/${elem.app}/`} />
                            </div>
                            <div className='stream-info-code'>
                                <span className='stream-info-addition'>code:</span>
                                <input value={elem.name} />
                            </div>
                        </div>
                        <Relaying app_id={elem.id} />
                    </div>
                ))
            }
        </div>
    )
}

const Relaying = ({ app_id }) => {
    const [ streamRelaying, setStreamRelaying ] = useState(undefined);
    const [ isOpen, setIsOpen ] = useState(false)

    useEffect(() => {
        if (streamRelaying == undefined) getRelaying(setStreamRelaying)
    })

    const getRelaying = async (callback) => {
        axios.get('/restream/'+app_id)
            .then(res => callback(res.data))
            .catch(res => callback(null))
    }

    return (
        <>
            {streamRelaying !== undefined && streamRelaying !== null && streamRelaying.length !== 0 &&
                <>
                    <div className={`stream-relaying ${isOpen ? 'open' : 'closed'}`}>
                        { !!streamRelaying &&
                            streamRelaying.map(elem => (
                                <div className='relay' key={elem.id}>
                                    <div className='relay-name'>{elem.description}</div>
                                    <div className='relay-url'>
                                        <input value={elem.url + elem.key} />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='relaying-btn' onClick={() => setIsOpen(!isOpen)}>{isOpen ? <BiUpArrowAlt /> : <BiDownArrowAlt />}</div>
                </>
            }
         </>
    )
}

export default App
