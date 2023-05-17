import React from 'react'
import Edit from '../images/edit.png'
import Delete from '../images/Delete.png'
import { Link } from 'react-router-dom'


const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <div className="info">
            <span>John</span>
            <p>posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
            <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex nesciunt minima cupiditate cum consequatur!</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero inventore repellendus incidunt dolorem excepturi repudiandae vitae! Ipsa esse dolores nobis animi obcaecati quibusdam quis reiciendis omnis voluptate minus voluptatibus eligendi vel ullam, cupiditate soluta optio. Eos velit illum voluptate quis delectus tenetur est quas tempora cumque fuga. Quos omnis, unde officia asperiores excepturi totam quia, id neque corrupti, possimus sunt debitis reprehenderit illum ratione sit. Expedita sit autem ea, sapiente assumenda aspernatur aliquam, facere a laudantium in incidunt labore harum aut libero tenetur dolorem facilis! Nam, consequatur aperiam voluptate, maxime quod qui, rem aliquam distinctio nemo placeat error. 
          
          Impedit praesentium beatae amet repudiandae?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita ullam voluptatem voluptas incidunt rerum perferendis iusto! Culpa ea necessitatibus perspiciatis ab pariatur obcaecati totam ipsa error. Accusantium odit eius accusamus aliquam necessitatibus soluta impedit animi, iste reiciendis consectetur totam! Delectus at aliquam beatae quas quo veritatis tenetur adipisci a nam similique quos fuga provident odit, nobis ea repudiandae repellat. Earum vel nesciunt, explicabo illo unde iusto voluptas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dignissimos asperiores, voluptatem dolorum ea libero eaque, culpa repudiandae ipsum nobis quae aliquid necessitatibus officia natus atque ab impedit neque optio totam perspiciatis repellat et. Possimus eos odit a! Maxime, porro. Culpa sint architecto nostrum sit sapiente nihil, in sunt aliquam incidunt! Voluptatibus quis incidunt temporibus aliquid.
        </p>
      </div>
        <div className="menu">m</div>
      
    </div>
  )
}

export default Single