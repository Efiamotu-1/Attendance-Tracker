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

function Main() {
  return (
    <div className='bg-[#111827] pt-5 pb-2 px-3 h-screen overflow-scroll flex flex-col justify-between'>
        <Container>
            <Outlet />
        </Container>

        <div className='text-center mt-2'>&copy; 2023 Habeeb Musa. All Rights Reserved</div>
    </div>
  )
}

export default Main