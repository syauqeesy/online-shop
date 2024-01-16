import Http from "./http";

const application = (type: "http" = "http"): Application => {
  switch (type) {
    default:
      return new Http();
  }
};

export default application;
