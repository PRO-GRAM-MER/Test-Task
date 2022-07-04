import React, {useState} from 'react';
import { Button } from '@material-ui/core';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export const Ex = () => {
  const[select, setSelect] = useState()
  return (
    <>
    <Button
        startIcon={<FiberManualRecordIcon
        style={{
          width: '8px',
          height: '8px',
          backgroundColor: '#E25D28',
          borderRadius:'999px',

        }}
        />}
        endIcon={<KeyboardArrowDownIcon />}
        style={{
          padding: 0,
          fontWeight: 500,
          fontSize: 14,
          color: '#757575',
          textTransform: "none",
          width: '118px',
          background: '#FFFFFF',
          border: '1px solid #F1F1F1',
          borderRadius: '999px',
        }}
        type='button'
        className='Header_intro_services'
      >
       BHK Type
    </Button>
   <select value={select}
   onChange={e=>setSelect(e)}
    name='select' multiple>
    <option value="one">1 BHK</option>
    <option value="two">2 BHK</option>
    <option value="three">3 BHK</option>
    <option value="four">4 BHK</option>
    <option value="five">5 BHK</option>
   </select>
    </>
    
    
  )
}
