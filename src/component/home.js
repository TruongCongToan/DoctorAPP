import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState,useEffect} from 'react';
import { Table } from 'react-bootstrap';


export default function Home(){
    const [data,setData] = useState([]);
    const[searchTerm,setSearchTerm] = useState('');
    const[currentPage,setcurrentPage] = useState(1);
    const[postPerPage] = useState(2);
    useEffect(() => {
        const url = "https://api-truongcongtoan.herokuapp.com/api/students";
    
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
          } catch (error) {
            console.log("error", error);
          }
        };
    
        fetchData();
    }, []);

    //get currentPost
    const indexofLast = currentPage*postPerPage;
    const indexofFirst = indexofLast - postPerPage;
    const currentPosts = data.slice(indexofFirst,indexofLast)

   const pageNumber =[];
   for(let i =1;i <= Math.ceil(data.length / postPerPage);i++){
     pageNumber.push(i);
   };
   const paginate = (pageNumber) => setcurrentPage(pageNumber);
    return(
        // <div className="d-flex flex-column shadow-lg p-3 m-auto mt-5" style={{maxWidth:'500px'}}>
        //     <h1 className="text-center">Please select an option: </h1>
        //     <Link className="btn btn-info m-1" to='/login'>Log In</Link>
        //     <Link className="btn btn-primary m-1" to='/signup'>Sign Up</Link>
        // </div>
        <div className="home">
          
      <input type="text" placeholder="検索 ...."  onChange ={event => {setSearchTerm(event.target.value)}}/>
    
          <Table striped bordered hover>
          <thead>
              <tr>
                <td>番号</td>
                <td>名前</td>
                <td>年齢</td>
                <td>性別</td>
                <td>場所</td>
                <td>メール</td>
                <td>電話番号</td>
                <td>アクション</td>
              </tr>
              </thead>
          <tbody>
            {
              currentPosts.filter((val) =>{
                if(searchTerm==""){
                  return val;
                }else if(val.hodem.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              }).map((item,key) =>(
                <tr key={key}>
                <td>{item.id}</td>
                <td>{item.hodem} {item.ten}</td>
                <td>{item.dob}</td>
                <td>{item.gioitinh}</td>
                <td>{item.tinh}</td>
                <td>{item.masv}</td>
                <td>{item.malop}</td>
                <td>action</td>
              </tr>
              ))}
          </tbody>
            </Table>
            <nav>
            <ul className='pagination justify-content-center'>
                {
                  pageNumber.map(number =>(
                    <li key={number} className='page-item'>
                      <a onClick={() => paginate(number)}  className='page-link' >
                        {number}
                      </a>

                    </li>
                  ))
                }
            </ul>
            </nav>
        </div>
    );
}