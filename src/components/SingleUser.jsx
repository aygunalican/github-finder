import '../assets/css/card.css'

const SingleUser = ({ image, title, profileURL,year }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4">
      <div 
        className="card" 
        style={{
        backgroundColor:'white',
          width: '18rem',
          height:"470px"

        }}
      >
        <img src={image} style={{
        
          width: '18rem',
          height:'300px',
        

        }}
          className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
         <p className="card-text">{year}
          </p>
          <a 
            target="_blank" 
            rel="noreferrer"
            href={profileURL} 
            className="btn btn-dark"
          >
            Go Profile
          </a>
        </div>
      </div>
    </div>
  )
}

export default SingleUser
