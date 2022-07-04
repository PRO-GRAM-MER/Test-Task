import React, { useState } from 'react';
import img from './../../images/image 20.jpg';
import './Header.scss';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {styled, InputBase, Badge, Menu, MenuItem } from '@mui/material';
import icon from './../../images/magnifying-glass (1) 14.png';
import notification from './../../images/notification (1) 11.jpg';
import Avatar from '@mui/material/Avatar';

const IntroBox = styled("div") (({theme}) => ({
  display:'flex',
  justifyContent: 'space-between',
  alignItems:'center',
  columnGap:'40px'

}));

const ProfileBox = styled("div") (({theme}) => ({
  display:'flex',
  justifyContent: 'space-between',
  alignItems:'center',
  columnGap:'20px'
}))

const SearchBar = styled("div") (({theme}) => ({
  display:'flex',
  justifyContent: 'space-between',
  alignItems:'center',
  width: '400px',
}));

const Search = styled("div") (({theme}) => ({
  border:'1px solid #F2F2F2',
  padding:'0 16px',
  borderRadius: '999px',
  background: 'rgba(242, 242, 242, 0.5)',
  width: '100%',
  cursor:'pointer'
}));

const SearchPic = styled("div") (({theme}) => ({
  display:'inline-block',
  width: '20px',
  height: '20px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  borderRadius:'50%',
  backgroundColor:'blue',
  marginLeft:'-28px',
  cursor: "pointer"
}));


export const Header = () => {

  const[open, setOpen] = useState(false);
  return (
    <div className='Header-Wrapper'>
      <div className='Header'>


        <IntroBox>
        <div className='Header_Intro'>
        <a 
          href='/'
          className='Header_Intro-link'
        >
          <img src={img} alt="Logo"/>
        </a>
        <h3 className='Header_Intro-title'>HouseBoon</h3>
        </div>

        <Button
          endIcon={<KeyboardArrowDownIcon />}
          style={{
            padding: 0,
            fontWeight: 500,
            fontSize: 14,
            color: '#757575',
            textTransform: "none"
          }}
          type='button'
          className='Header_intro_services'
        >
          Services
        </Button>

        </IntroBox>


        <SearchBar>
          <Search>
            <InputBase placeholder="serach by location"/>
          </Search>
          <SearchPic>
            <img 
              src={icon}
              alt='search'
              style={{
              width:'100%',
              height:'100%',
              }}
            >
              
            </img>
          </SearchPic>


        </SearchBar>

        <Button
          style={{
            padding: '0',
            fontWeight: '500',
            fontSize: '14px',
            textTransform: "none",
            color: '#757575',
          }}
          type='button'
        >
          Check Tenancy score
        </Button>

        <Button
          style={{
            fontSize: '14px',
            color: '#757575',
            textTransform: 'none',
            border: '1.2px solid #EEEEEE',
            background: '#FFFFFF',
            padding: '16px, 24px',
            borderRadius: '12px',
            width: '144px'
          }}
          type='button'
        >
          List Your Places
        </Button>

        <ProfileBox>
          <Badge>
            <Avatar
            src= {notification}
              style={{
                width: '25px',
                height: '25px',
              }}
            />
          </Badge>

          <Badge 
            color="error"
          >
          <Avatar
            src="/broken-image.jpg"
            onClick={e=>setOpen(true)}
            style={{
            width: '25px',
            height: '25px',
            background: '#E5E5E5',
            cursor: 'pointer',
          }}
          />
          </Badge>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={e=>setOpen(false)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>

        </ProfileBox>
      </div>

    </div>
  )
}
