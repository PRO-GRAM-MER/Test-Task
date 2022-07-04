import React, {useState} from 'react';
import Stack from '@mui/material/Stack';
import './Filter.scss';
import { Button, Divider, makeStyles} from '@material-ui/core';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const classes= makeStyles(() => ({
  label: {
      fontSize: '14px'
   }
}));



export const Filter = () => {

  return (
    <div className='Filter-Wrapper'>

      <div className='Filter'>
      <Stack direction="row" style={{columnGap:'12px'}}>
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

      <Button
        endIcon={<KeyboardArrowDownIcon />}
        style={{
          padding: 0,
          fontWeight: 500,
          fontSize: 14,
          color: '#757575',
          textTransform: "none",
          width: '152px',
          background: '#FFFFFF',
          border: '1px solid #F1F1F1',
          borderRadius: '999px',
        }}
        type='button'
        className='Header_intro_services'
      >
       Price Range
      </Button>

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
          width: '134px',
          background: '#FFFFFF',
          border: '1px solid #F1F1F1',
          borderRadius: '999px',
        }}
        type='button'
        className='Header_intro_services'
      >
        Place type
      </Button>

      <Button
        endIcon={<KeyboardArrowDownIcon />}
        style={{
          padding: 0,
          fontWeight: 500,
          fontSize: 14,
          color: '#757575',
          textTransform: "none",
          width: '114px',
          background: '#FFFFFF',
          border: '1px solid #F1F1F1',
          borderRadius: '999px',
        }}
        type='button'
        className='Header_intro_services'
      >
       BHK Type
      </Button>

      <Button
        endIcon={<KeyboardArrowDownIcon />}
        style={{
          padding: 0,
          fontWeight: 500,
          fontSize: 14,
          color: '#757575',
          textTransform: "none",
          width: '153px',
          background: '#FFFFFF',
          border: '1px solid #F1F1F1',
          borderRadius: '999px',
        }}
        type='button'
        className='Header_intro_services'
      >
       Price Range
      </Button>
      <Button
        endIcon={<KeyboardArrowDownIcon />}
        style={{
          padding: 0,
          fontWeight: 500,
          fontSize: 14,
          color: '#757575',
          textTransform: "none",
          width: '167px',
          background: '#FFFFFF',
          border: '1px solid #F1F1F1',
          borderRadius: '999px',
        }}
        type='button'
        className='Header_intro_services'
      >
       Furnishing Type
      </Button>
      <Divider orientation="vertical" flexItem></Divider>
      <Button
        endIcon={<KeyboardArrowDownIcon />}
        style={{
          padding: 0,
          fontWeight: 500,
          fontSize: '14px',
          color: '#757575',
          textTransform: "none",
          width: '134px',
          background: '#FFFFFF',
          border: '1px solid #F1F1F1',
          borderRadius: '999px',
        }}
        type='button'
        className='Header_intro_services'
      >
       More Filters
      </Button>

      <FormControlLabel
        classes={{ label: classes.label }}
        value="Map View"
        control={<Switch color="primary" />}
        label="Map View"
        labelPlacement="start"
       />
      </Stack>

      </div>

      <div className='vertical-Line'></div>

      <div
        style={{
          width:'fit-content',
          margin: '0px 40px 28px 40px',
        }}
      >
        <h1
          style={{
            fontStyle:'normal',
            fontWeight:'600',
            fontSize:'25px',
            color: '#101010',
          }}
        >
          Flats in Sushant lok phase 1, Gurugram
        </h1>
        <h4
          style={{
            fontStyle:'normal',
            fontWeight:'500',
            fontSize:'18px',
            color: '#C2C2C2',
          }}
        >
          979 Properties
        </h4>
      </div>

    </div>
    
  );
}
