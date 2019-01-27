import React, { Component } from 'react';
// import TreeNav from './TreeNav';
// import Jumbotron from './Jumbotron';

class Sale extends Component{
  constructor(props) {
     super(props)
     this.state = {
        shop: [
                {id: 35, name: 'jumper', color: 'red', price: 20},
                {id: 42, name: 'shirt', color: 'blue', price: 15},
                {id: 56, name: 'pants', color: 'green', price: 25},
                {id: 71, name: 'socks', color: 'black', price: 5},
                {id: 72, name: 'socks', color: 'white', price: 5},
            ]
     }
   }
  render() {
    return (
      <div>
        <div className="row">
        <div className="col-5" style={{borderRight: "1.5px solid #D3D3D3"}}>
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
          </tbody>
        </table>
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
          
            
        </div>
        <div className="col-7">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="ค้นหาสินค้าที่นี้" aria-label="ค้นหาสินค้าที่นี้" aria-describedby="button-addon2"/>
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button" id="button-addon2">ค้นหา</button>
            </div>
          </div>
          <div style={{overflow: "scroll",height: "80vh"}}>
          <p><b>รองเท้า</b></p>
          <div class="card-deck">

            <div class="card" style={{width: "11rem"}}>
              <img src="./product/shoes.jpeg" class="card-img-top" alt="..."/>
              <div class="card-footer bg-transparent border-success">รองเท้าอดิดาส</div>
            </div>
            <div class="card" style={{width: "11rem"}}>
              <img src="./product/shoes.jpeg" class="card-img-top" alt="..."/>
              <div class="card-footer bg-transparent border-success">รองเท้าอดิดาส</div>
            </div>

            <div class="card" style={{width: "11rem"}}>
              <img src="./product/shoes.jpeg" class="card-img-top" alt="..."/>
              <div class="card-footer bg-transparent border-success">รองเท้าอดิดาส</div>
            </div>
            <div class="card" style={{width: "11rem"}}>
              <img src="./product/shoes.jpeg" class="card-img-top" alt="..."/>
              <div class="card-footer bg-transparent border-success">รองเท้าอดิดาส</div>
            </div>
          </div>
          <p><b></b></p>
          <div class="card-deck">
            <div class="card" style={{width: "11rem"}}>
              <img src="./product/shoes.jpeg" class="card-img-top" alt="..."/>
              <div class="card-footer bg-transparent border-success">รองเท้าอดิดาส</div>
            </div>
            <div class="card" style={{width: "11rem"}}>
              <img src="./product/shoes.jpeg" class="card-img-top" alt="..."/>
              <div class="card-footer bg-transparent border-success">รองเท้าอดิดาส</div>
            </div>

            <div class="card" style={{width: "11rem"}}>
              <img src="./product/shoes.jpeg" class="card-img-top" alt="..."/>
              <div class="card-footer bg-transparent border-success">รองเท้าอดิดาส</div>
            </div>
            <div class="card" style={{width: "11rem"}}>
              <img src="./product/shoes.jpeg" class="card-img-top" alt="..."/>
              <div class="card-footer bg-transparent border-success">รองเท้าอดิดาส</div>
            </div>
          </div>
           <p><b>รองเท้า</b></p>
          <div class="card-deck">

            <div class="card" style={{width: "11rem"}}>
              <img src="./product/shoes.jpeg" class="card-img-top" alt="..."/>
              <div class="card-footer bg-transparent border-success">รองเท้าอดิดาส</div>
            </div>
            <div class="card" style={{width: "11rem"}}>
              <img src="./product/shoes.jpeg" class="card-img-top" alt="..."/>
              <div class="card-footer bg-transparent border-success">รองเท้าอดิดาส</div>
            </div>

            <div class="card" style={{width: "11rem"}}>
              <img src="./product/shoes.jpeg" class="card-img-top" alt="..."/>
              <div class="card-footer bg-transparent border-success">รองเท้าอดิดาส</div>
            </div>
            <div class="card" style={{width: "11rem"}}>
              <img src="./product/shoes.jpeg" class="card-img-top" alt="..."/>
              <div class="card-footer bg-transparent border-success">รองเท้าอดิดาส</div>
            </div>
          </div>
          <p><b>รองเท้า</b></p>
          <div class="card-deck">
            <div class="card" style={{width: "11rem"}}>
              <img src="./product/shoes.jpeg" class="card-img-top" alt="..."/>
              <div class="card-footer bg-transparent border-success">รองเท้าอดิดาส</div>
            </div>
            <div class="card" style={{width: "11rem"}}>
              <img src="./product/shoes.jpeg" class="card-img-top" alt="..."/>
              <div class="card-footer bg-transparent border-success">รองเท้าอดิดาส</div>
            </div>

            <div class="card" style={{width: "11rem"}}>
              <img src="./product/shoes.jpeg" class="card-img-top" alt="..."/>
              <div class="card-footer bg-transparent border-success">รองเท้าอดิดาส</div>
            </div>
            <div class="card" style={{width: "11rem"}}>
              <img src="./product/shoes.jpeg" class="card-img-top" alt="..."/>
              <div class="card-footer bg-transparent border-success">รองเท้าอดิดาส</div>
            </div>
          </div>




        </div>
        </div>
        </div>
        {/* <ul>
          {this.state.shop.map(function(item, key){
            return <li key={item.id}>{item.name}</li>
          })}
        </ul> */}
      </div>
    );
  }
}
export default Sale;