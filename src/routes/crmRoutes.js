import {
  getContactWithID,
  getContacts,
  addNewContact,
  updateContact,
  deleteContact,
} from "../controllers/crmController";

const routes = (app) => {
  app
    .route("/contact")
    .get((req, res, next) => {
      //middleware
      console.log(`Request from: ${req.originalUrl}`); //what is this req from
      console.log(`Request type: ${req.method}`); //what is this req method
      next();
    }, getContacts) //getting the data

    .post(addNewContact); // posting and saving the data in JSON as API

  app
    .route("contact/:contactID")
    .get(getContactWithID) //getting an specific contact
    .put(updateContact) // updating specific contact

    .delete(deleteContact); // deleting specifc contact
};

export default routes;
