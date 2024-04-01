import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import "./Appointment.css";

const AppointmentCard = (props) => {

    const time = `${props.day.getHours()}:${props.day.getMinutes()}:${props.day.getSeconds()}`
    console.log(props);
const {setApp,appoint} = props
    const handleDelete =  (id)=>{
        setApp(appoint.filter((item) => {
            return item.id!==id
        }))
    }


    const handleDubbleClick = (id)=> {
        setApp(appoint.map(item=> {
            return(
                item.id == id ? {...item,consulted: !item.consulted } : item

            )
        })
        )
    }

  return (
    <Card className="my-2" >
      <ListGroup className="  d-flex flex-row justify-content-between align-items-center"  variant="flush" >

<div className={props.consulted ? "appointment consulted ": "appointment"} onDoubleClick={()=> handleDubbleClick(props.id)}>

</div>


        <ListGroup.Item>
            <h3 className='text-danger'>{props.patientName}</h3>
            <h4>{props.doctorName}</h4>
        </ListGroup.Item>

        <ListGroup.Item >
            <p>Date: {props.day.toDateString()}</p>
            <p>Time: {time}</p>
        </ListGroup.Item>

        <ListGroup.Item onClick={()=> handleDelete(props.id)} className= "p-2 bg-dark rounded-circle me-3 opacity-75">

        ❌

        </ListGroup.Item>

      </ListGroup>

      {props.consulted && <span className='consulted'>Consulted</span>}
    </Card>
  )
}

export default AppointmentCard