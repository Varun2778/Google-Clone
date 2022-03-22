import React,{useState} from 'react'
import './Search.css';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';
import {useHistory} from 'react-router-dom';
import {useStateValue} from '../StateProvider';
import {actionType} from "../reducer";


function Search( {hideButtons = false}) {
  const[{},dispatch]= useStateValue();
  const[input,setInput] =useState("");
  const history = useHistory();

  const searching = e=>{
    e.preventDefault();
    // console.log("You hit the search button",input);
    // do something with the input
    dispatch({
      type:actionType.SET_SEARCH_TERM,
      term: input,
    })

    history.push('./search')
  };

  return (
    <form className='search'>
        <div className='search_input'>
        <SearchIcon className = 'search_inputIcon'/>
        <input placeholder='Search Google or type a URL' value={input} onChange={e=>setInput(e.target.value)} />
        <MicIcon className ='micIcon'/>
        </div>

        {!hideButtons ? (
          <div className='search_button'>
          <Button type='submit' onClick={searching} variant="outlined">Google Search</Button>
          <Button variant="outlined">I Am feeling Lucky</Button>
          </div>
        ): (
          <div className='search_buttons'>
        <Button className='search_buttonHidden' type='submit' onClick={searching} variant="outlined">Google Search</Button>
        <Button className='search_buttonHidden' variant="outlined">I Am feeling Lucky</Button>
        </div>
        )}
        
    </form>
  )
}

export default Search