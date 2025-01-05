import "./style.categoryName.css";

// eslint-disable-next-line react/prop-types
const CategoryName = ({cName}) => {

  return (
    <div className='category__name__box'>
      <h3>{cName ? cName : "Anonymous Page"}</h3>
      <hr />
    </div>
  )
}

export default CategoryName;
