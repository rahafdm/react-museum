import { useContext } from "react"
import { Row } from "react-bootstrap"
import CollectionList from "../components/CollectionList"
import MuesumContext from "../utils/MuesumContext"

function AllCollections() {
  const { collections } = useContext(MuesumContext)
  return (
    <>
      <img
        src="https://th.bing.com/th/id/R.ef118e354bdd2e4a2ebe63a7f1cb5d8f?rik=D09ydN0BaB6E%2bw&riu=http%3a%2f%2fmtarch.com%2fwp-content%2fuploads%2f1999%2f06%2fSaudiMuseum04-1650x1300.jpg&ehk=kaOTolHF96rtWKAutSJcTo8YLVfscr%2fu36YPQL1Ai00%3d&risl=&pid=ImgRaw&r=0"
        style={{
          minHeight: "100vh",
          width: "100%",
          position: "absolute",
          top: "0",
          left: "0",
          objectFit: "cover",
          zIndex: "-1",
          marginBottom: "30px",
        }}
      />

      <Row>
        <h4 className="mt-5 mb-4"> القطع الأثرية </h4>
      </Row>
      <Row md={5}>
        {collections.map(collection => (
          <CollectionList collection={collection} key={collection._id} />
        ))}
      </Row>
    </>
  )
}

export default AllCollections
