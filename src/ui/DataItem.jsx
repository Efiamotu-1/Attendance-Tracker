import styled from "styled-components";

const StyledDataItem = styled.div`
  display: flex;
  align-items: center;
  gap: .8rem;
  padding: 0.4rem 0;
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 400;

  & svg {
    width: 1rem;
    height: 1rem;
    color: #4f46e5;
  }
`;

function DataItem({ icon, label, children }) {
  return (
    <StyledDataItem>
      <Label>
        {icon}
        <span>{label}</span>
      </Label>
      {children}
    </StyledDataItem>
  );
}

export default DataItem;
