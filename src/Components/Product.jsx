import { useState, useEffect } from 'react';
import React from 'react';
import '../Style/product.css';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { storeData } from '../redux/storeData/action';
import Box from '@mui/material/Box';
import { Pagination } from '@mui/material';

// import {useNavigate,useParams} from 'react-router';
import {Button ,ButtonGroup} from '@mui/material'
import {addCart} from '../redux/Cart/action'




const ProductPage = () => {
  // const [data, setData] = useState([]);

  const [search,setSearch] = useState("")
  const [value,setValue] = useState([])
	//console.log(search)
  const [val,setVal] = useState("")
// const params = useParams()
// const navigate = useNavigate()

  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const fetchData = async () => {
    return axios({
      url: `https://snapdealabc.herokuapp.com/mens?_page=${page}&_limit=10`,
      method: 'GET',
      params: {},
    })
      .then((response) => {
        // const data =(response.data)

        console.log(response.data)
      dispatch(storeData(response.data));
      })

      .catch((error) => {});
  };

  useEffect(() => {
    fetchData();
  }, [page]);




  const data = useSelector((state) => state.Data.data);
  console.log(data)
  const CartData = useSelector((state) => state.Cart.cart);
  console.log(CartData);


  const Send = (e) => {
   // console.log(e)
  dispatch(addCart(e))
  
  }
  const sortBylow =(m) => {
    if(m==="l"){
     let res = data.sort((a,b) => a.original_price - b.orginal_price)
     setValue([...res])
     //console.log(res)
    }else if( m==="h"){
      let res = data.sort((a,b) => b.original_price - a.original_price)
      setValue([...res])
      //console.log(res)
    }
    
    }
  
 
  // const filterByPrice1 = () => {
 
  //     let productPrice = data.filter((p) =>  p.price >=50000)
  //     console.log(productPrice)
  //     setValue([...productPrice])
     
    
  
  // }
  
  //console.log(setVal)

  
  return (
    <div>
  <div>
       <input type="text"placeholder="What are you loooking for" className="search" onChange={(e) => setSearch(e.target.value)} />
        </div>

    
      
{/* 
        <div>
          products is {params.id}
        </div> */}


       
  
      

    <div className="flex">
       <div >
       <Box
      sx={{
        display: 'flex',
       
        '& > *': {
          m: 2,
        },
      }}
 >
     
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="contained"
    
      >
   <div className=""> 
  <Button className="mt-8 w-32 " onClick= {() => {sortBylow("l")}}>Less price</Button>
  </div>
  <div className="mt-5  bg-red-600">
  <Button className="mt-8 w-32  " onClick= {() => {sortBylow("h")}}>high price</Button>
  </div>
  <div className="mt-5">
 
  <Button className="mt-8 w-32" onClick={() => {setVal("men")}} >men </Button>
  </div>
  <div className="mt-5">
  <Button className="mt-8 w-32"onClick={() => {setVal("women")}} >women</Button>
  </div>
  
      </ButtonGroup>
  
    </Box>
       </div>
      
      <div className="container " >
    
   
        {data
        .filter((el) => {
          
          if(el.title === val){
            return el.title ===val
          }else if(val === ""){
              return el
          }
       })
        .filter((a) => {
          if(search === ""){
            return a
          }else{
            return a.name.toLowerCase().includes(search.toLowerCase())  || a.madeBy.toLowerCase().includes(search.toLowerCase())  
          }
          
        })
        
        
        .map((a) => {
          return (
            <>
              <div className="borde w-80 " key={a.id}>
                <div className="   h-full ">
                  <div >
                    <img src={a.image} alt="" id="img" />
                  </div>
                  <div className="b  w-2/5 text-white">
                    <div>
                      <button className="bg-red-500 shadow-lg rounded-2xl p-2 hover:bg-blue-600 shadow-blue-500/50  " onClick={() => {Send(a)}} >
                        Add to cart
                      </button>
                    </div>
          
                  </div>
                  
                  <div className=" mt-1 mb-2  ">
                   
                      <div className="text-md font-semi-bold borde w-72 ">
                        {a.title}
                      </div>

                      <div className="text-sm mb-5">
                        <p>???{a.original_price}</p>
                      </div>
                   
                    <div className="  ">
                     <div className="flex w-48">
                     
                      <div className="text-red-400 font-bold ">
                        <p>??? {a.discounted_price}</p>
                      </div>
                      
                     </div>
                     
                      <div className="text-gray-500 mt-2 d2">
                        <p>{a.rating}</p>
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      </div>

      <Box py={4} display="flex" justifyContent="center">
        <Pagination
          count={10}
          color="secondary"
          variant="outlined"
          onChange={(e, value) => setPage(value)}
        />
      </Box>

    </div>
  );
};

export { ProductPage};
