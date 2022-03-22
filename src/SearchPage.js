import React from 'react'
import './SearchPage.css';
import { useStateValue } from './StateProvider';
import useGoogleSearch from './useGoogleSearch';
import Response from './Response';
import {Link} from "react-router-dom";
import Search from "./pages/Search";
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';



function SearchPage() {
    const[{term},dispatch] = useStateValue();
    
    // Live Api call
    const{data} =useGoogleSearch(term);

    // MockApiCall
    // const data = Response;

    // https://developers.google.com/custom-search/v1/using_rest
    // https://cse.google.com/cse/create/new

    console.log(data);

    return (
    <div className='searchPage'>
        <div className='searchPage_header'>
            <Link to ="/">
                <img className='searchPage_logo' src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt =""/>
            </Link>
            <div className='searchPage_headerBody'>
            <Search hideButtons/>
         

            <div className='searchPage_options'>
                <div className='searchPage_optionsLeft'>
                    <div className='searchPage_option'>
                        <SearchIcon/>
                        <Link to="./all">All</Link>
                    </div>
                    <div className='searchPage_option'>
                        <DescriptionIcon/>
                        <Link to = "./news">News</Link>
                    </div>
                    <div className='searchPage_option'>
                        <ImageIcon/>
                        <Link to="./images">Images</Link>
                    </div>
                    <div className='searchPage_option'>
                        <LocalOfferIcon/>
                        <Link to= "./shopping">Shopping</Link>
                    </div>
                    <div className='searchPage_option'>
                        <RoomIcon/>
                        <Link to="./maps">Maps</Link>
                    </div>
                    <div className='searchPage_option'>
                        <MoreVertIcon/>
                        <Link to="./more">More</Link>
                    </div>
                </div>
                <div className='searchPage_optionsRight'>
                    <div className='searchPage_option'>
                        <Link to="./settings">Settings</Link>
                    </div>
                    <div className='searchPage_option'>
                        <Link to="./tools">Tools</Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
        {term && (
            <div className='searchPage_results'>
                <p className='searchpage_resultCount'>
                    About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime})
                </p>

                {data?.items.map(items => (
                   <div className='searchPage_result'>
                       <a href={items.link}>
                            {items.pagemap?.cse_image?.length > 0 && items.pagemap?.cse_image[0]?.src && (
                                <img className='searchPage_resultImage' src ={
                                    items.pagemap?.cse_image?.length>0 && items.pagemap?.cse_image[0]?.src
                                }
                                alt=""
                                />
                            ) }
                            {items.displayLink} ▽ 
                       </a>
                       <a className='searchPage_resultTitle' href={items.link}>
                            <h2>{items.title}</h2>
                       </a>
                       <p className='searchPage_resultSnipet'>
                          {items.snippet}  
                       </p>
                   </div>     
                ))}
            </div>
        )}
        
    </div>
  )
}

export default SearchPage
