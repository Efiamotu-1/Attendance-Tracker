import styled from "styled-components";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 1.2rem;
  align-items: center;
  justify-items: center;
  padding: 0.7rem 1.2rem;
  cursor: pointer;

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

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: #dcfce7;
`;

function CourseRow({ course }) {
  const [showForm, setShowForm] = useState(false);
  const isCreating = false
  const isDeleting = false
  const {id: courseId, course_title, department, num_of_classes_held, percentage, } = course
    

  const navigate = useNavigate()

  function handleDuplicate() {}

  return (
    <>
      <TableRow role="row" onClick={() => navigate(`/courses/${courseId}`)}>
        <div>{course_title}</div>
        <div>{department}</div>
        <div>{num_of_classes_held}</div>
        <div>{percentage || 100}%</div>
      </TableRow>
    </>
  );
}

export default CourseRow;
