import React from 'react';

// const products =[
//   {
//     id: 1,
//     name: 'Lib Tech Skate Banana BTX Snowboard',
//     description: 'When youre dropping in on the Lib Tech SkateBanana',
//     image: 'https://vignette.wikia.nocookie.net/narutocouple/images/7/7e/Sasuke-uchiha-sasuke-34355552-1280-720.jpg/revision/latest?cb=20130722015119'
//   },
//   {
//     id: 2,
//     name: 'Lib Tech Skate Banana BTX Snowboard',
//     description: 'When youre dropping in on the Lib Tech SkateBanana',
//     image: 'https://vignette.wikia.nocookie.net/narutocouple/images/7/7e/Sasuke-uchiha-sasuke-34355552-1280-720.jpg/revision/latest?cb=20130722015119'
//   },
//   {
//     id: 3,
//     name: 'Lib Tech Skate Banana BTX Snowboard',
//     description: 'When youre dropping in on the Lib Tech SkateBanana',
//     image: 'https://vignette.wikia.nocookie.net/narutocouple/images/7/7e/Sasuke-uchiha-sasuke-34355552-1280-720.jpg/revision/latest?cb=20130722015119'
//   },
//   {
//     id: 4,
//     name: 'Lib Tech Skate Banana BTX Snowboard',
//     description: 'When youre dropping in on the Lib Tech SkateBanana',
//     image: 'https://vignette.wikia.nocookie.net/narutocouple/images/7/7e/Sasuke-uchiha-sasuke-34355552-1280-720.jpg/revision/latest?cb=20130722015119'
//   }
// ];

const ProductListRow = (props) =>{
  return (
    <li className = "media" style = { { cursor:'pointer' } }>
      <div className="media-left">
        <a href = "#">
          <img className = "media-object" height="64" src={props.product.image}/>
        </a>
      </div>
      <div className="media-body">
        <h4 className = "media-heading"> {props.product.name}></h4>
        <span> {props.product.description}</span>
      </div>
    </li>
  );
}

export default class ProductList extends React.Component{
  render(){
    return (
      <ul className = "media-list">
        {products.map((p)=> (<ProductListRow key = {p.id} product = {p}/>))}
      </ul>
    );
  }
}
