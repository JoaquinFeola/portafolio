
export const TechnologyCard = ({ name, imgURL }) => {
  return (
    <div className="card">
        <img
            className="technology-img" 
            src={ imgURL }  
            alt={ `${ name } logo --Joaquin_Portfolio` } 
        />
        <div className="card-body">
            <h3>{ name }</h3>
        </div>
    </div>
  )
}
