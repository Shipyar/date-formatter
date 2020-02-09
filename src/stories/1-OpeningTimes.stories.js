import React from "react";

import Layout from "../components/Layout";
import Opening from "../components/Opening";

import data from "../data/userData.json";
import complexData from "../data/complexData.json";

export default {
  title: "Opening Times",
  component: Opening
};

export const Default = () => {
  return (
    <Layout>
      <Opening openings={data} />
    </Layout>
  );
};

export const ComplexDataStructure = () => {
  return (
    <Layout>
      <Opening openings={complexData} />
    </Layout>
  );
};

export const MissingDataStructure = () => {
  return (
    <Layout>
      <Opening />
    </Layout>
  );
};
