import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, InputGroup, Table } from "react-bootstrap";
import { data } from "./data.js";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Container className="bg-slate-700 border-2 border-slate-950">
        <h1 className="text-center text-3xl text-white mt-2 mb-8 h-5">
          List of People
        </h1>
        <Form>
          <InputGroup className="my-3">
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search people"
            />
          </InputGroup>
        </Form>
        <Table striped bordered hover className="border-2 border-slate-300">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.first_name.toLowerCase().includes(search);
              })
              .map((item, index) => (
                <tr key={index}>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
