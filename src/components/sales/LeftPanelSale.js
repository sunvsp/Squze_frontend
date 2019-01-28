import React, { Component } from 'react';

class LeftPanelSale extends Component {

    render(){
        return(
        <React.Fragment>
            <div class="card" style={{ overflow: "scroll", height: "52vh"}}>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col" style={{width: "35%"}}>รายการ</th>
              <th scope="col" style={{width: "15%"}}>จำนวน</th>
              <th scope="col" style={{width: "20%"}}>หน่วยละ</th>
              <th scope="col" style={{width: "20%"}}>จำนวนเงิน</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* <td style={{overflow: "hidden",textOverflow: "ellipsis" , maxWidth: "100px" ,  whiteSpace: "nowrap"}}>รองเท้าสีขาวasdaskdnaslndjalnsjdsal</td> */}
              <td>รองเท้า</td>
              <td>1</td>
              <td>500.00</td>
              <td>500.00</td>
            </tr>
            <tr>
              <td>กระเป๋า</td>
              <td>2</td>
              <td>340.00</td>
              <td>680.00</td>
            </tr>
            <tr>
              <td>กระเป๋า</td>
              <td>2</td>
              <td>340.00</td>
              <td>680.00</td>
            </tr>
            <tr>
              <td>กระเป๋า</td>
              <td>2</td>
              <td>340.00</td>
              <td>680.00</td>
            </tr>
            <tr>
              <td>กระเป๋า</td>
              <td>2</td>
              <td>340.00</td>
              <td>680.00</td>
            </tr>
            <tr>
              <td>กระเป๋า</td>
              <td>2</td>
              <td>340.00</td>
              <td>680.00</td>
            </tr>
            <tr>
              <td>กระเป๋า</td>
              <td>2</td>
              <td>340.00</td>
              <td>680.00</td>
            </tr>
                  <tr>
                    <td>กระเป๋า</td>
                    <td>2</td>
                    <td>340.00</td>
                    <td>680.00</td>
                  </tr>
                  <tr>
                    <td>กระเป๋า</td>
                    <td>2</td>
                    <td>340.00</td>
                    <td>680.00</td>
                  </tr>
          </tbody>
        </table>
        </div>
            <div class="card">
              <div className="row" style={{padding: "1%", height: "25vh", paddingLeft: "5%"}}>
              <div class="card-body" style={{width : "50%"}}>
                  <div className="row">
                    <div class="card-body" style={{ width: "50%", color: "#808080"}}>
                      <p>จำนวนสินค้า</p>
                      <p>รวมเงิน</p>
                      <p>ส่วนลด</p>
                    </div>
                     <div class="card-body" style={{ width: "50%" }}>
                     <p><b>3</b></p>
                      <p><b>2000.00</b></p>
                      <p><b>0.00</b></p>
                    </div>
                  </div>
              </div>
              <div class="card-body" style={{ width: "50%", paddingLeft: "5%", color: "#808080" }}>
                <h5 class="card-title" style={{ marginTop: "12%"}}>สรุปยอด</h5>
                <h1 style={{color: "#0080ff"}}>3000.00</h1>
              </div>

            </div>
             <div class="card-footer text-muted">
   
              <div style={{ display: "inline-block", width: "100%"}}>
                <button type="button" class="btn btn-danger" style={{width: "30%"}}>ยกเลิก</button>
                <button type="button" class="btn btn-success" style={{width: "69%", marginLeft: "1%"}}>จ่ายเงิน</button>
              </div>
              <div></div></div>
            </div>
            </React.Fragment>
        );
    }
}

export default LeftPanelSale;