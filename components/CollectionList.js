import { useContext } from "react"
import { Button, Card, Col } from "react-bootstrap"
import MuesumContext from "../utils/MuesumContext"
import styles from "./Collections.module.css"
import {FcLikePlaceholder, FcLike } from "react-icons/fc"


function CollectionList(props) {
  const { collection } = props
 const { addFavCollection, profile } = useContext(MuesumContext)

 let liked = false
  if (profile) liked = collection.favCollection.includes(profile._id)
  return (
    <>
      <Col>
        <Card border="light" style={{ maxWidth: "600px", marginRight: "20px" }}>
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
           
           <Button variant="none" onClick={() => addFavCollection(collection._id)} style={{ borderRadius: 15, color: "white" }}>
              {liked ? <FcLike /> : <FcLikePlaceholder />}
              <span className="ms-2"> {collection.favCollection.length}</span>
            </Button>
           
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default CollectionList
