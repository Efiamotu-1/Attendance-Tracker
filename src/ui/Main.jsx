import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components';


const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  background:
`;

function Main({}) {
  return (
    <div className='bg-[#111827] py-9 px-3 h-screen'>
        <Container>
            <Outlet />
        </Container>
    </div>
  )
}

export default Main