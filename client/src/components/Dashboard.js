import React,{useState} from 'react'
import Sidebar from './Sidebar';
import OpenConversation from './OpenConversation';
import { useConversations } from '../contexts/ConversationsProvider';
import { IconButton } from '@mui/material';
import { MenuOpen,KeyboardBackspace } from '@mui/icons-material';

export default function Dashboard({ id }) {
  const { selectedConversation } = useConversations()
  const [ menu, setMenu] = useState(false)
  return (
    <>
    
      
      {menu ? 
        <div className="d-flex" style={{ height: '100vh' }}>
          <IconButton className='flesh-button' color="primary"
           onClick={()=> setMenu(false)}>
            <MenuOpen fontSize='large' />
          </IconButton> : 
          <Sidebar id={id} />
        </div>:
          <div className="d-flex"  style={{ height: '100vh' }}>
          <IconButton className='flesh-button' color="primary"
           onClick={()=> setMenu(true)}>
            <KeyboardBackspace fontSize='large' />
          </IconButton>
          {selectedConversation && <OpenConversation />}
          </div>  
        }
    </>
    
  )
}
