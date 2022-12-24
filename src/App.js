import {useState, useEffect} from 'react';
import './App.css'
import Sphere from "./components/Sphere";
import NewsList from "./components/NewsList";

export default function App() {
    const [newsLoading, setNewsLoading] = useState(true)
    const [newsList, setNewsList] = useState([])

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/v1/get-list-view').then(data=>{
            return data.json()
        }).then(res=>{
                console.log(res)
                setNewsList(res)
                setNewsLoading(false)
            })
    },[])

  return (
      <>
          <div className="badWrapper">
            <NewsList newsList={newsList} side={'left'}/>
          </div>
        <Sphere/>
          <div className='goodWrapper'>
            <NewsList newsList={newsList} side={'right'}/>
          </div>
      </>

  );
}

