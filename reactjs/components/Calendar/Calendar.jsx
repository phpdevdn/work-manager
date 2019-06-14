import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import {work_list_url} from 'src/Helpers/links'
class Calendar extends React.Component {
	componentDidMount(){
		this.props.fetchWorks(work_list_url);
	}
	render(){
		return (
		  <FullCalendar 
		  	defaultView="dayGridMonth"
            header={{
              left: '',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            }}		  	 
		  	plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
		  	events = {this.props.works} 
		  	/>
		)
	}

}
export default Calendar;