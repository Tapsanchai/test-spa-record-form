import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import DashboardShow from "../dashboard/DashboardShow";

import {
  Button,
  Form,
  Label,
  Input,

} from "reactstrap";
import { useForm } from "react-hook-form";

export default function FormInsert() {
  const [accountList, setDataList] = useState([]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setDataList([...accountList, { Index: accountList.length, ...data }]);
    //setDataList([...accountList, {...account ,index: accountList.length}]);
  };

  const remove = (e) => {
    console.log("call func remove!! ID=" + e);
    let show = setDataList([...accountList.filter((key) => key.Index !== e)]);
    console.log(show);
  };

  return (
    <div>
      <h3>Form Record</h3>
      {/* <h5>{JSON.stringify(accountList)}</h5>  */}
      <div className="shadow bg-white mt-2">
        <Row>
          <Col lg="12">
            <div className="p-4">
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row className="mb-3">
                  <Col lg="2">
                    <div className="form-floating">
                      <Input
                        type="select"
                        name="title_txt"
                        id="floatingInputGrid"
                        className="form-select form-select-lg bg-white height-input"
                        {...register("Title", { required: true })}
                      >
                        <option>--Select--</option>
                        <option value="Mr">Mr.</option>
                        <option value="Ms">Ms.</option>
                        <option value="Mrs">Mrs.</option>
                      </Input>
                      {errors.Title && (
                        <div className="text-danger">
                          please check title fill.
                        </div>
                      )}
                      <Label for="floatingSelect">
                        Title<span className="text-danger fw-bolder">*</span>
                      </Label>
                    </div>
                  </Col>
                  <Col lg="5">
                    <div className="form-floating ">
                      <Input
                        type="text"
                        name="f_name_txt"
                        className="form-control form-control-lg height-input"
                        id="floatingInputGrid"
                        {...register("FirstName", {
                          required: true,
                          maxLength: 15,
                        })}
                      />
                      {errors.FirstName && (
                        <div className="text-danger">
                          please check firstname fill.
                        </div>
                      )}
                      <Label for="floatingInputGrid">
                        FirstName{" "}
                        <span className="text-danger fw-bolder">*</span>
                      </Label>
                    </div>
                  </Col>
                  <Col lg="5">
                    <div className="form-floating ">
                      <Input
                        type="text"
                        name="l_name_txt"
                        className="form-control form-control-lg height-input"
                        id="floatingInputGrid"
                        {...register("LastName", {
                          required: true,
                          maxLength: 15,
                        })}
                      />
                      {errors.LastName && (
                        <div className="text-danger">
                          please check lastname fill.
                        </div>
                      )}
                      <Label for="floatingInputGrid">
                        LastName{" "}
                        <span className="text-danger fw-bolder">*</span>
                      </Label>
                    </div>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col lg="6">
                    <div className="form-floating ">
                      <Input
                        type="date"
                        name="birthday_txt"
                        id="exampleDatetime"
                        className="form-control form-control-lg height-input"
                        {...register("Birthday", { required: true })}
                      />
                      {errors.Birthday && (
                        <div className="text-danger">
                          please check birthday fill.
                        </div>
                      )}
                      <Label for="floatingInputGrid">
                        Birthday<span className="text-danger fw-bolder">*</span>
                      </Label>
                    </div>
                  </Col>
                  <Col lg="6">
                    <div className="form-floating ">
                      <Input
                        type="select"
                        name="nationality_txt"
                        id="floatingInputGrid"
                        className="form-select form-select-lg bg-white height-input"
                        {...register("Nationality", { required: true })}
                      >
                        <option>--Select--</option>
                        <option value="Thai">Thai</option>
                        <option value="Japan">Japan</option>
                        <option value="American">American</option>
                      </Input>
                      {errors.Nationality && (
                        <div className="text-danger">
                          please check nationality fill.
                        </div>
                      )}
                      <Label for="floatingInputGrid">
                        Nationality
                        <span className="text-danger fw-bolder">*</span>
                      </Label>
                    </div>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col lg="6">
                    <div className="form-floating">
                      <Input
                        type="select"
                        name="gender_txt"
                        id="floatingInputGrid"
                        className="form-select form-select-lg bg-white height-input"
                        {...register("Gender", { required: true })}
                      >
                        <option>--Select--</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="unisex">Unisex</option>
                      </Input>
                      {errors.Gender && (
                        <div className="text-danger">
                          please check gender fill.
                        </div>
                      )}
                      <Label for="floatingSelect">
                        Gender<span className="text-danger fw-bolder">*</span>
                      </Label>
                    </div>
                  </Col>
                  <Col lg="6">
                    <div className="form-floating ">
                      <Input
                        type="tel"
                        name="phone_txt"
                        className="form-control form-control-lg height-input"
                        id="floatingInputGrid"
                        {...register("PhoneNunber", {
                          required: true,
                          minLength: 10,
                          maxLength: 10,
                          pattern: /([0][0-9]{9})/,
                        })}
                      />
                      {errors.PhoneNunber && (
                        <div className="text-danger">
                          pattern is 0XXXXXXXXX (10 number)
                        </div>
                      )}
                      <Label for="floatingInputGrid">
                        Phone Number
                        <span className="text-danger fw-bolder">*</span>
                      </Label>
                    </div>
                  </Col>
                </Row>

                <Button type="submit" className="btn btn-lg btn-dark">
                  SUBMIT
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
      <DashboardShow accountList={accountList} remove={remove} />
    </div>
  );
}
