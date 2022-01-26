import { useContext } from "react";
import { Card, Col } from "react-bootstrap";
import MuesumContext from "../utils/MuesumContext";
import styles from "./Collections.module.css"

function AddToFavCollection(props) {
   const { favoriteCollection } = props
    return (   
        <>
         <Col>
        <Card border="light" style={{ maxWidth: "600px", marginRight: "20px" }}>
          {/* <Link to={"/collections"}> */}
          <Card.Img
            variant="top"
            className={styles.collectionImage}
            src={favoriteCollection.image}
            height="220px"
            style={{ borderRadius: "10px" }}
          />
          {/* </Link> */}
          <Card.Body>
            {/* <Link to={`/collections/${collection._id}`} className="text-black" style={{ textDecoration: "none" }}> */}
            <Card.Title className={styles.collectionTitle}>{favoriteCollection.title}</Card.Title>
            {/* </Link> */}
            <Card.Text className="text-muted">{favoriteCollection.description}</Card.Text>

            {/* {favoriteCollection.types.map(type => (
              <p> النوع : {type.name}</p>
            ))}
            */}
           {/* <Button variant="none" onClick={() => addFavCollection(collection._id)} style={{ borderRadius: 15, color: "white" }}>
              {liked ? <FcLike /> : <FcLikePlaceholder />}
              <span className="ms-2"> {collection.favCollection.length}</span>
            </Button> */}
           
          </Card.Body>
        </Card>
      </Col>
        </>
    );
}

export default AddToFavCollection;