import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import MuesumContext from "../utils/MuesumContext"

function EditProfile() {
  const {profile, editProfile, handleCloseProfile, profileShow } = useContext(MuesumContext)
  return (
    <>
      <Modal show={profileShow} onHide={handleCloseProfile}>
        <Form
          onSubmit={e => {
            editProfile(e)
            handleCloseProfile()
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title> تعديل ملفك الشخصي </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group as={Row} className="mb-3">
              <Row>
                <Form.Label> الأسم الأول</Form.Label>
              </Row>
              <Col md="10">
                <Form.Control type="text" name="firstName" defaultValue={profile.firstName} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Row>
                <Form.Label>الأسم الأخير</Form.Label>
              </Row>
              <Col md="10">
                <Form.Control type="text" name="lastName" defaultValue={profile.lastName}/>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Row>
                <Form.Label> رقم الجوال</Form.Label>
              </Row>
              <Col md="10">
                <Form.Control type="text" name="phoneNumber" defaultValue={profile.phoneNumber}/>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Row>
                <Form.Label>الصورة الشخصية</Form.Label>
              </Row>
              <Col md="10">
                <Form.Control type="url" name="avatar" defaultValue={profile.avatar} />
              </Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-warning" type="submit">
              تعديل
            </Button>
            <Button onClick={handleCloseProfile} variant="outline-secondary">
              اغلاق
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default EditProfile
