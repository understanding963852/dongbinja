import './App.css';
import Customer from './components/Customer';
import data from './data.json';


// const customers = [
//   {
//   'id':1,
//   'image':'https://placeimg.com/64/64/any',
//   'name':'홍길동1',
//   'birthday':'574841',
//   'gender':'남자1',
//   'job':'대학생1'
// },
// {
//   'id':2,
//   'image':'https://placeimg.com/64/64/1',
//   'name':'홍길동2',
//   'birthday':'574842',
//   'gender':'남자2',
//   'job':'대학생2'
// },
// {
//   'id':3,
//   'image':'https://placeimg.com/64/64/2',
//   'name':'홍길동3',
//   'birthday':'574843',
//   'gender':'남자3',
//   'job':'대학생3'
// },

// ]
function App() {
  return (
    <div className="App">
      {data.data.map(item=>{
        return(
          <Customer
                key={item.id}
                id={item.id}
                image={item.image}
                name={item.name}
                birthday={item.birthday}
                gender={item.gender}
                job={item.job}
                />
        )
      })}
      
    </div>
  );
}

export default App;
