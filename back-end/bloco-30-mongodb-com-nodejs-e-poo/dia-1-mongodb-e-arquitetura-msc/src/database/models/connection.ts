import { connect } from "mongoose";

const connection = (mongoDatabaseURI: string) => {
  try {
    connect(mongoDatabaseURI);
  } catch (err) {
    console.log(err);
  }
};

export default connection;
