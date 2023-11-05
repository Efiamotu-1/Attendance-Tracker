import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateReportForm from "./CreateReportForm";

function AddReport() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="report-form">
        <Button >
            Add new report</Button>
        </Modal.Open>
        <Modal.Window name="report-form">
          <CreateReportForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}


export default AddReport;
