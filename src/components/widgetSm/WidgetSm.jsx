import React from 'react'
import './WidgetSm.css';
import { Visibility } from '@material-ui/icons';

export default function WidgetSm() {
    return (
        <div className='widgetSm'>
            <span className='widgetSmTitle'>New Join Members</span>
            <ul className='widgetSmList'>
                <li className='widgetSmListItem'>
                    <img className='widgetSmImg' src='https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt=''/>
                    <div className='widgetSmUser'>
                        <span className='widgetSmUserName'>Peter Parker</span>
                        <span className='widgetSmUserTitle'>Software Engineer</span>
                    </div>
                    <button className='widgetSmButton'><Visibility className='widgetSmIcon'/>Display</button>
                </li>
                <li className='widgetSmListItem'>
                    <img className='widgetSmImg' src='https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt=''/>
                    <div className='widgetSmUser'>
                        <span className='widgetSmUserName'>Peter Parker</span>
                        <span className='widgetSmUserTitle'>Software Engineer</span>
                    </div>
                    <button className='widgetSmButton'><Visibility className='widgetSmIcon'/>Display</button>
                </li>
                <li className='widgetSmListItem'>
                    <img className='widgetSmImg' src='https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt=''/>
                    <div className='widgetSmUser'>
                        <span className='widgetSmUserName'>Peter Parker</span>
                        <span className='widgetSmUserTitle'>Software Engineer</span>
                    </div>
                    <button className='widgetSmButton'><Visibility className='widgetSmIcon'/>Display</button>
                </li>
                <li className='widgetSmListItem'>
                    <img className='widgetSmImg' src='https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt=''/>
                    <div className='widgetSmUser'>
                        <span className='widgetSmUserName'>Peter Parker</span>
                        <span className='widgetSmUserTitle'>Software Engineer</span>
                    </div>
                    <button className='widgetSmButton'><Visibility className='widgetSmIcon'/>Display</button>
                </li>
                <li className='widgetSmListItem'>
                    <img className='widgetSmImg' src='https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt=''/>
                    <div className='widgetSmUser'>
                        <span className='widgetSmUserName'>Peter Parker</span>
                        <span className='widgetSmUserTitle'>Software Engineer</span>
                    </div>
                    <button className='widgetSmButton'><Visibility className='widgetSmIcon'/>Display</button>
                </li>
            </ul>
        </div>
    )
}
