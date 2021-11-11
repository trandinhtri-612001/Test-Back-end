import Alert from 'react-bootstrap/Alert'
import Modal from 'react-bootstrap/Modal'
const AlertMessage = ({ info }) => {
	return info === null ? null : (
		
		<Modal
        size="sm"
        show={info.show}
        onHide={info.show}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton >
          <Modal.Title id="example-modal-sizes-title-sm">
            waring
          </Modal.Title>
        </Modal.Header>
			<Modal.Body>{info.message}</Modal.Body>
      </Modal>
		

	)
}

export default AlertMessage