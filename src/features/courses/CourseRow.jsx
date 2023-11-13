import styled from "styled-components";
import { useNavigate} from "react-router-dom";

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

function CourseRow({ course }) {
  const {id: courseId, course_title, department, num_of_classes_held, percentage, } = course

  const navigate = useNavigate()


  return (
    <>
      <TableRow role="row" onClick={() => navigate(`/courses/${courseId}`)}>
        <div>{course_title}</div>
        <div>{department}</div>
        <div>{num_of_classes_held}</div>
        <div>{percentage || 0}%</div>
      </TableRow>
    </>
  );
}

export default CourseRow;
