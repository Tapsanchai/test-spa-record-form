import React from "react";
import { Row, Col, Table, Button } from "reactstrap";

export default function DashboardShow(props) {
  //const show = props;
  const { accountList } = props;
  const { remove } = props;

  //const [data2, Setdata2] = useState({value: ""});
  //const d = Setdata2({value: accountList.Index});

  const SetDelete = (e) => {
    console.log(e);
    remove(e);
  };
  return (
    <div className="mt-5">
      <h3>Dashboard</h3>
      <div className="shadow bg-white mt-2">
        <Row className="mb-5">
          <Col lg="12">
            <div className="p-4">
              <Table bordered className="text-center align-middle mb-0" responsive>
                <thead className="table-secondary">
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Birthday</th>
                    <th>Nationality</th>
                    <th>Gender</th>
                    <th>PhoneNunber</th>
                    <th>Manage</th>
                  </tr>
                </thead>
                <tbody>
                  {accountList == "" ? (
                    <tr className="">
                      <td colspan="8">
                        <h5 className="p-2 text-primary">No Items...</h5>
                      </td>
                    </tr>
                  ) : (
                    accountList.map((item) => (
                      <tr key={item.Index}>
                        <td>{item.Index}</td>
                        <td>{item.FirstName}</td>
                        <td>{item.LastName}</td>
                        <td>{item.Birthday}</td>
                        <td>{item.Nationality}</td>
                        <td>{item.Gender}</td>
                        <td>{item.PhoneNunber}</td>
                        <td>
                          <Button
                            className="btn btn-danger"
                            value={item.Index}
                            onClick={() => SetDelete(item.Index)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
