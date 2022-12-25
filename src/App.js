import {useState, useEffect} from 'react';
import './App.css'
import Sphere from "./components/Sphere";
import NewsList from "./components/NewsList";

export default function App() {
    const [newsLoading, setNewsLoading] = useState(true)
    const [goodNews, setGoodNews] = useState([])
    const [bedNews, setBedNews] = useState([])

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/v1/get-list-view').then(data=>{
            return data.json()
        }).then(res=>{
                const goodNews = []
                const bedNews = [];
                const setOfNews = new Set()
                res.forEach(item=>{
                    setOfNews.add(item.raiting)
                    if(item.raiting){
                        goodNews.push(item)
                    }else{
                        bedNews.push(item)
                    }
                })
            setGoodNews(goodNews)
            setBedNews(bedNews)
                setNewsLoading(false)
            })
    },[])

  return (
      <>
          {goodNews.length && <div className="badWrapper">
              <NewsList newsList={goodNews} side={'left'}/>
          </div>}

        <Sphere/>
          <div className='goodWrapper'>
            <NewsList newsList={goodNews} side={'right'}/>
          </div>
      </>

  );
}

