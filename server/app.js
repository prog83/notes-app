import express from "express";
import bodyParser from "body-parser";
import { serverPort } from "../config";
import * as db from "./db";

db.setUpConnection();

const app = express();

app.use(bodyParser.json());

app.get('/notes', (req, res) => {
  db.listNotes().then(data => res.status(200).send(data));
});

app.post('/notes', (req, res) => {
  db.createNote(req.body).then(data => res.status(200).send(data));
});

app.delete('/notes/:id', (req, res) => {
  db.deleteNote(req.params.id).then(data => res.status(200).send(data));
});

const server = app.listen(8080, () => {
  console.log(`Server is up and running on port ${serverPort}`);
});
