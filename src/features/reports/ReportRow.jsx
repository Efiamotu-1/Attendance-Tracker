import styled from "styled-components";
import { useState } from "react";

import { HiCheck, HiPencil, HiSquare2Stack, HiTrash, HiXMark } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 1.2rem;
  align-items: center;
  justify-items: center;
  padding: 0.7rem 1.2rem;

  &:not(:last-child) {
    border-bottom: 1px solid #1f2937;
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-weight: 600;
  color: #d1d5db;
  font-family: "Sono";
`;

const Date = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Attended = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: #dcfce7;
`;

function ReportRow({ cabin }) {
  const [showForm, setShowForm] = useState(false);
  const isCreating = false
  const isDeleting = false

  const navigate = useNavigate()

  function handleDuplicate() {}

  return (
    <>
      <TableRow role="row" >
        <div>Company Law</div>
        <div>23-3-2023</div>
        <div className="bg-green-500 p-1.5 rounded-lg"><HiCheck /></div>
        <div className="bg-red-500 p-1.5 rounded-lg"><HiXMark /></div>
      </TableRow>
    </>
  );
}

export default ReportRow;
