import styled from "styled-components";
import Button from "./Button";

const StyledConfirmDelete = styled.div`
  width: 16rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  & p {
    color: #9ca3af;
    margin-bottom: 0.6rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 0.6rem;
  }
`;

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  return (
    <StyledConfirmDelete>
      <h3 className="text-white">Delete </h3>
      <p>
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div>
        <Button
          variation="secondary"
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button variation="danger" disabled={disabled} onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
