import "./appHeader.css";
import baza from "../../baza/Baza";
function AppHeader() {
  return (
    <div>
      <div className="appHeader">
        <div className="userInfo">
          <div className="searchBox">
            <input type="search" required placeholder="Search" />
          </div>
          <div className="userList">
            <div className="userItem">
              <div className="userImg">
                <img src="" alt="" />
              </div>
              <div className="userText">
                <h3>Mirzayev Jaloliddin Kamoliddin o'g'li </h3>
                <p>+998912345678</p>
              </div>
              <div className="userCardPrice">
                <h4>limit 300 000 so'm</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AppHeader;
