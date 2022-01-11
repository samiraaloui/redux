import React , {useState} from 'react'
import { Modal ,Button,FormControl} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {editeTask } from '../Redux/actions';
const EditeTask = ({taskData}) => {
    const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        const[newDescription,setNewDescription]=useState('')
      const handleChange=(e)=>{
        setNewDescription(e.target.value)
      }

    const dispatch=useDispatch()

      const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(editeTask({
          id:taskData.id,
          newDescription : newDescription
        }))
        handleClose()
      }
        return (
         <>
            <Button variant="primary"  style={{marginLeft:"2rem"}} onClick={handleShow}>
            EditTask
            </Button>
      
            <Modal show={show} onHide={handleClose} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title style={{color:"#681071"}}>Edite Task</Modal.Title>
              </Modal.Header>
              <Modal.Body style={{color:"#671A46"}}> Entre a ToDo</Modal.Body>
              <FormControl
                defaultValue={taskData.description}
                onChange={handleChange}
              />
              <Modal.Footer>
                <Button variant="secondary"  >
                  Close
                </Button>
                <Button variant="danger" onClick={handleSubmit}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      }
      
      

export default EditeTask
