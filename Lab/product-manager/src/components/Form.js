import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <div className="col-5 grid-margin">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Thông tin sản phẩm</h3>
          </div>
          <div className="card-body">
            {/* <h3 className="card-title">Thông tin sản phẩm</h3> */}
            <form className="form-sample">
              <div className="form-group row">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    ID
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Product ID"
                    aria-label="ProductID"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Name
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Product Name"
                    aria-label="ProductName"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Quantity
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="0"
                    aria-label="Quantity"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    Price
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="0"
                    aria-label="Price"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              {/* <div className="form-group row">
                <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Tuổi</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Giới tính</label>
                <div className="col-sm-9">
                  <select className="form-control">
                    <option>Nam</option>
                    <option>Nữ</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Ngày sinh</label>
                <div className="col-sm-9">
                  <input className="form-control" placeholder="dd/mm/yyyy" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Nơi sinh</label>
                <div className="col-sm-9">
                  <select className="form-control">
                    <option>Hà Nội</option>
                    <option>TP. Hồ Chí Minh</option>
                    <option>Đà Nẵng</option>
                    <option>Quảng Ninh</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Địa chỉ</label>
                <div className="col-sm-9">
                  <textarea className="form-control" defaultValue={""} />
                </div>
              </div> */}
              <button type="submit" className="btn btn-primary me-2">
                Edit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
