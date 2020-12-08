import React, { useEffect, useState } from "react";
import { HomeHeader } from "./HomeHeader/HomeHeader";
import { HomeFooter } from "./HomeFooter/HomeFooter";
import { HomeContent } from "./HomeContent/HomeContent";
import { dataLoader } from "../../DataLoader";

export const Home = () => {
  const [responseRes, setResponseRes] = useState(null);
  useEffect(() => {
    const load = async () => {
      const res = await dataLoader();
      setResponseRes(res);
    };
    load();
  }, []);
  if (responseRes === null) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {JSON.stringify(responseRes)}
      <HomeHeader />
      <HomeContent />
      <HomeFooter />
    </div>
  );
};
