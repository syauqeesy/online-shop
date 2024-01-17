import Database from "./Application/database";

const database = new Database();

export default database.getDataSource();
