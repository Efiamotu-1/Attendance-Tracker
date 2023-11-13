import styled from "styled-components";

import { HiCheck, HiXMark } from "react-icons/hi2";


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





function ReportRow({ report, courses }) {

  const {course_id, class_held, class_attended, class_date} = report

  return (
    <>
    {courses.length > 0 && <TableRow role="row" >
        <div>{courses?.find(course => course.id === course_id).course_title}</div>
        <div>{class_date}</div>
      {class_held === 1 ?  <div className="bg-green-500 p-1.5 rounded-lg"><HiCheck /></div> :
        <div className="bg-red-500 p-1.5 rounded-lg"><HiXMark /></div> }

{class_attended === 1 ?  <div className="bg-green-500 p-1.5 rounded-lg"><HiCheck /></div> :
        <div className="bg-red-500 p-1.5 rounded-lg"><HiXMark /></div> }
      </TableRow>
}
    </>
  );
}

export default ReportRow;
