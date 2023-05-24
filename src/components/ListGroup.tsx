import {useState} from "react";
//{items:[], :string} 
interface Props{
  items:string[];
  heading:string;
onSelectItem:(item : string) =>void;
}
function ListGroup({items,heading ,onSelectItem}: Props) {
  // let items = ["new york", "sa francisco", "Toyo", "Londor", "pars"];
   
     const [selectedIndex , setSelectedIndex] = useState(-1);
   
  return (
    <>
      <h1>List</h1>

      {items.length === 0 && <p> No item found </p>}
      <ul className="list-group">
        {items.map((item , index) => (
          <li
            className={ selectedIndex === index 
            ?"list-group-item active"
          :"list-group-item"}
            key={item}
            onClick={()=>{setSelectedIndex (index);
            onSelectItem(item); 
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
