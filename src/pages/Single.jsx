import React from "react";
import { Link } from "react-router-dom";

import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="" alt="" />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Img"
          />
          <div className="info">
            <span>Name</span>
            <p>Posted on</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`} className="link">
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
         <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum neque qui, assumenda vero quo rerum veritatis? Sed alias facere voluptatibus consectetur repudiandae? Dignissimos, rem? Enim ad distinctio optio excepturi esse?</h1>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea ut ratione nihil in quaerat saepe est, fugiat sed fuga nostrum perspiciatis, tempora iure! Necessitatibus ipsa quos autem officia officiis deserunt! <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis qui illo id, veniam voluptatum eius minus nisi, totam officia praesentium ad repudiandae amet similique? Dignissimos in deleniti laborum nam est. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium aliquam nam cupiditate autem quae ad ut, praesentium fugit provident quam, dignissimos nesciunt atque officiis! Quam praesentium veritatis non eum. Voluptatem! <br />
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quidem modi, iste molestiae quo natus beatae id consectetur labore, adipisci velit laudantium perspiciatis sint, dolore ab error quaerat recusandae? Veniam?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae maiores ab placeat modi temporibus cumque? Suscipit rerum, ex molestiae id voluptas unde ut esse adipisci vero doloremque quaerat. Quaerat, iste.</p>
      </div>
      <Menu/>
    </div>
  );
};

export default Single;
