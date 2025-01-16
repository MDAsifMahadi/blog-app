import "./style.categoryName.css";


const CategoryName = ({cName}) => {

  return (
    <div className='category__name__box'>
      <h3>{cName ? cName : "Anonymous Page"}</h3>
      <hr />
    </div>
  )
}

export default CategoryName;
