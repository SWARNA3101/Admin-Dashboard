import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs76XDhjVV0JGMtPXumzZSKtntK5f4fIPVMTyPF0MO-ztBg4vCryYdDIleGNcDu_m-pl4&usqp=CAU"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Paramveer Singh</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">params@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Elton St. 234 Garden Yd. Delhi
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">INDIA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default Single;
