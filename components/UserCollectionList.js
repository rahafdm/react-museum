import { useContext } from "react"
import { Card, Col } from "react-bootstrap"
import MuesumContext from "../utils/MuesumContext"
import styles from "./Collections.module.css"

function CollectionList(props) {
  const { collection } = props
  const { locations, eras } = useContext(MuesumContext)

  return (
    <>
      <Col>
        <Card border="light" style={{ maxWidth: "600px", marginRight: "20px"  }}>
          {/* <Link to={"/collections"}> */}
          <Card.Img
            variant="top"
            className={styles.collectionImage}
            src={collection.image}
            height="220px"
            style={{ borderRadius: "10px" }}
          />
          {/* </Link> */}
          <Card.Body>
            {/* <Link to={`/collections/${collection._id}`} className="text-black" style={{ textDecoration: "none" }}> */}
            <Card.Title className={styles.collectionTitle}>{collection.title}</Card.Title>
            {/* </Link> */}
            <Card.Text className="text-muted">{collection.description}</Card.Text>

            {collection.types.map(type => (
              <p> النوع : {type.name}</p>
            ))}

            <Card.Text className="text-muted">{collection.location.location}</Card.Text>
            <Card.Text className="text-muted">{collection.era.era}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default CollectionList
