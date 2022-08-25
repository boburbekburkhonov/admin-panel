import React, { useState, useEffect }from 'react';
import ActionAreaCard from '../UI/Card'
import Api from '../Api';

function index(props) {

  const[pages, setPage] = useState([])

  const { Layout, data } = Api

  async function fetchData(){
    const responce = await data.Get_Users()
    setPage(responce.data.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <div className="container d-flex flex-wrap justify-content-between">
      {pages.map(item => {
         return <ActionAreaCard key={item.id} item={item} />
      })}
      </div>
    </div>
  );
}

export default index;