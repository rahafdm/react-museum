import { useContext } from "react";
import MuesumContext from "../utils/MuesumContext";


function AddComment(props) {
    const { addComment } = useContext(MuesumContext)
    const { userCollectionId } = props
    return ( 
        <>
         <div className="ms-4">
      <h1> اضافة تعليق </h1>
      <Form className="mt-5" onSubmit={e => addComment(e, userCollectionId)}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            التعليق
          </Form.Label>
          <Col md="6">
            <Form.Control as="textarea" name="comment" required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="my-4">
          <Col md={{ span: 10, offset: 2 }}>
            <Button type="submit"> اضافة </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
        </>
     );
}

export default AddComment;