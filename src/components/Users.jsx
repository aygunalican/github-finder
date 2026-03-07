
import SingleUser from './SingleUser'

const Users = ({ sendUsers }) => {
    return (
        <div className="container">
      <div className="row g-5">
      {sendUsers.map((movie) => (
        <SingleUser
          key={movie['#IMDB_ID']}       
          image={movie['#IMG_POSTER']}   
          title={movie['#TITLE']}        
          profileURL={movie['#IMDB_URL']} 
          year={movie['#YEAR']}
        />
      ))}
    </div>
        </div>
    )
}

export default Users