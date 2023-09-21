import { getCabins } from "../services/apiCabins";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { useEffect } from "react";

function Cabins() {
  useEffect(function () {
    getCabins().then((data) => console.log(data));
  }, []);
  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img src="https://zvtlsprgfsmsevnitlqu.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg?t=2023-09-21T06%3A35%3A10.553Z" />
    </Row>
  );
}

export default Cabins;
