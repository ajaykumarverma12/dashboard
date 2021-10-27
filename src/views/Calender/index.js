import React,{useState} from "react";
import MainCard from 'ui-component/cards/MainCard';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import { Button, Typography } from "@mui/material";
import { Modal ,FloatingLabel,Form, Col,Row} from "react-bootstrap";
import {  } from "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DateTimePicker from "@material-ui/lab/DateTimePicker";
import DateFNSUtils from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import { pink,green,yellow,orange } from '@mui/material/colors';
import Radio from '@mui/material/Radio';

const locales = {
    'en-US': enUS,
  }
  
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  })
  
const Calender = () => {
  const [modalShow, setModalShow] = React.useState(false);
    return(
        <React.Fragment>
        <MainCard  >
            <Typography variant="h3">Event Calender <span style={{float:'right'}}>
              <Button variant="contained" color="secondary" onClick={() => setModalShow(true)}>Add New Event</Button></span>
              </Typography>
              <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
            <Calendar
          localizer={localizer}
        //   events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 700,marginTop:'50px' }}
          
        />
       
        </MainCard>
        </React.Fragment>

    )

}
function MyVerticallyCenteredModal(props,item) {
  const [value, setValue] = useState(new Date());
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  return (
    <Modal
      {...props}
      size=""
      
     
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
        Add Event
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Box 
          sx={{
            width: 500,
            maxWidth: '100%',
            
            
          }}
        >
<TextField fullWidth label="Title" id="fullWidth"   variant="outlined" color="error"   helperText="title is required" />
        </Box>
        <FloatingLabel controlId="floatingTextarea2" label="Description" style={{marginTop:'10px'}} >
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '100px',borderRadius:'10px' }}
    />
  </FloatingLabel>
  <FormGroup style={{marginTop:'20px'}}>
      <FormControlLabel control={<Switch defaultChecked />} label="All Day" />
    </FormGroup>
    <div style={{marginTop:'20px'}}>
      <Row>
        <Col md="6">
          <p style={{marginLeft:'12px'}}>Start Time</p>
        <LocalizationProvider dateAdapter={DateFNSUtils} >
        <DateTimePicker
          value={value}
          onChange={(newValue) => {
            console.log(newValue.toUTCString());
            setValue(newValue);
          }}
          renderInput={(startProps) => (
            <React.Fragment>
              <TextField {...startProps} />
            </React.Fragment>
          )}
        />
      </LocalizationProvider>
        </Col>
        <Col md="6">
        <p tyle={{marginLeft:'12px'}}>End Time</p>
        <LocalizationProvider dateAdapter={DateFNSUtils} >
        <DateTimePicker
          value={value}
          onChange={(newValue) => {
            console.log(newValue.toUTCString());
            setValue(newValue);
          }}
          renderInput={(startProps) => (
            <React.Fragment>
              <TextField {...startProps} />
            </React.Fragment>
          )}
        />
      </LocalizationProvider>
        </Col>

      </Row>

      </div>
      <Typography variant="h4" style={{marginTop:'20px'}}>Background Color</Typography>
      <div style={{marginTop:'10px'}}>
      <Radio {...controlProps('a')}  />
      default
      <Radio {...controlProps('b')} color="secondary" />
      <Radio
        {...controlProps('c')}
        sx={{
          color: yellow[800],
          '&.Mui-checked': {
            color: yellow[600],
          },
        }}
      />
         <Radio
        {...controlProps('d')}
        sx={{
          color: orange[800],
          '&.Mui-checked': {
            color: orange[600],
          },
        }}
      />
      
      <Radio
        {...controlProps('e')}
        sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }}
      />
       <Radio
        {...controlProps('f')}
        sx={{
          color: green[800],
          '&.Mui-checked': {
            color: green[600],
          },
        }}
      />
      </div>
      <Typography variant="h4" style={{marginTop:'20px'}}>Text Color</Typography>
      <div style={{marginTop:'10px'}}>
      <Radio {...controlProps('a')}  />
      default
      <Radio {...controlProps('b')} color="secondary" />
      <Radio
        {...controlProps('c')}
        sx={{
          color: yellow[800],
          '&.Mui-checked': {
            color: yellow[600],
          },
        }}
      />
         <Radio
        {...controlProps('d')}
        sx={{
          color: orange[800],
          '&.Mui-checked': {
            color: orange[600],
          },
        }}
      />
      
      <Radio
        {...controlProps('e')}
        sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }}
      />
       <Radio
        {...controlProps('f')}
        sx={{
          color: green[800],
          '&.Mui-checked': {
            color: green[600],
          },
        }}
      />
      </div>
      
      </Modal.Body>
      <Modal.Footer>
        <Button variant="contained" color="secondary"  onClick={props.onHide}>Cancel</Button>
        <Button variant="contained" color="secondary">Add</Button>

      </Modal.Footer>
    </Modal>
  );
}

export default Calender;
