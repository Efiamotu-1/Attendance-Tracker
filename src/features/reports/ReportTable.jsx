import styled from "styled-components";

import Spinner from "../../ui/Spinner";
import ReportRow from "./ReportRow";

const Table = styled.div`
  border: 1px solid #374151;

  font-size: 0.7rem;
  background-color: #18212f;
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: .6rem;
  align-items: center;
  justify-items: center;
  background-color: #111827;
  border-bottom: 1px solid #1f2937;
  text-transform: uppercase;
  letter-spacing: 0.2px;
  font-weight: 600;
  color: #d1d5db;
  padding: .8rem 1.2rem;
`;

function ReportTable() {
  const isLoading = false
  const cabins  = [{}]

  if (isLoading) return <Spinner />;

  return (
    <Table role="table">
      <TableHeader role="row">
        <div>Course</div>
        <div>Class Date</div>
        <div>Held</div>
        <div>Attended</div>
      </TableHeader>
      {cabins.map((cabin) => (
        <ReportRow cabin={cabin} key={cabin.id} />
      ))}
    </Table>
  );
}

export default ReportTable;
