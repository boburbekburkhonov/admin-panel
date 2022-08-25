import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '../UI/Button';
import Api from '../Api';

export default function FullWidthTextField() {

  const[isname, setIsname] = useState('')

  const { Layout, data } = Api



  function fetchData(){

    const params = {
      id: Date.now(),
      isname: isname
    }

    return Layout.Get_Post(params),
    window.location.reload(),
    setIsname('')
  }

  return (
    <div className="container">
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        marginTop: '10px'
      }}
    >
      <TextField value={isname} onChange={((e) => setIsname(e.target.value))} fullWidth label="appbar" id="fullWidth" />
    </Box>
    <Button postData={fetchData} />
    </div>
  );
}