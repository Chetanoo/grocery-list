import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function NoPage(): JSX.Element {
  const navigate = useNavigate();
  return (
    <>
      <div>{'There\'s nothing in here!'}</div>
      <Button onClick={() => navigate('/')}>BACK TO MAIN PAGE</Button>
    </>
  );
}
