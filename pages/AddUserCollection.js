import { useContext } from "react"
import MuesumContext from "../utils/MuesumContext"
import video from "../assets/video.mp4"
import { Button, Col, Form, Row } from "react-bootstrap"
import styles from "./Add.module.css"
function AddUserCollection() {
  const { addUserCollection, locations, eras, types } = useContext(MuesumContext)
  return (
    <>
      <div>
        <video className={styles.video} src={video} autoPlay loop />
        <h1 className={styles.title}> اضف مجموعتك الخاصة </h1>
        <Form className="mt-5" onSubmit={addUserCollection}>
          <Form.Group as={Row} className="mb-3">
            <Col md="5">
              <Form.Control
                type="text"
                name="title"
                placeholder=" اكتب العنوان هنا .. "
                style={{ textAlign: "center", marginRight: "100%" }}
                required
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col md="5">
              <Form.Control
                type="text"
                name="discription"
                placeholder=" اكتب الوصف هنا .. "
                style={{ textAlign: "center", marginRight: "100%" }}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col md="5">
              <Form.Control
                type="url"
                name="image"
                placeholder="  اختر الصورة .."
                style={{ textAlign: "center", marginRight: "100%" }}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col md="5">
              {types.map(type => (
                <>
                  <h1>{type.name}</h1>
                  <Row>
                    <Form.Check
                      type="checkbox"
                      name="types"
                      value={type._id}
                      key={type._id}
                      style={{ textAlign: "center", marginRight: "100%" }}
                    />

                    <span style={{ textAlign: "center", marginRight: "100%" }}>{type.name}</span>
                  </Row>
                </>
              ))}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              الموقع
            </Form.Label>
            <Col md="8" style={{ maxHeight: 100, overflowY: "scroll", border: "1px solid darkgray" }}>
              {locations.map(location => (
                <Row style={{ height: 55, display: "flex", alignItems: "center" }}>
                  <Col md="2">
                    <Form.Check type="radio" name="location" value={location._id} />
                  </Col>
                  <Col md="8">
                    <span style={{ marginLeft: 10 }}>{location.location}</span>
                  </Col>
                </Row>
              ))}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              الحقبة
            </Form.Label>
            <Col md="8" style={{ maxHeight: 150, overflowY: "scroll", border: "1px solid darkgray" }}>
              {eras.map(era => (
                <Row style={{ height: 55, display: "flex", alignItems: "center" }}>
                  <Col md="2">
                    <Form.Check type="radio" name="era" value={era._id} />
                  </Col>
                  <Col md="8">
                    <span style={{ marginLeft: 10 }}>{era.era}</span>
                  </Col>
                </Row>
              ))}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mt-5">
            <div>
              <Row style={{ paddingLeft: "20%", paddingRight: "42%" }}>
                <Button variant="outline-dark" type="submit">
                  اضف مجموعة جديدة
                </Button>
              </Row>
            </div>
          </Form.Group>
        </Form>
      </div>
      )
    </>
  )
}

export default AddUserCollection
