import React from "react";
import Layout from "../../components/Layout";
import PlaceList from "../../components/PlaceList";
import { places } from "../../data";
import { useRouter } from "next/router";

const userPlaces = () => {
  const router = useRouter();
  const userPlaces = places.filter(
    (place) => place.creator === router.query.userPlaces
  );
  return (
    <Layout title="My Places" subtitle="list of your current places">
      <PlaceList places={userPlaces} />
    </Layout>
  );
};

export default userPlaces;
