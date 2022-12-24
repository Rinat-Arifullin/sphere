import './newsList.css'
import NewsCard from "./NewsCard";

export default function NewsList({newsList, side}){
    return <div className={`newsListWrapper ${side}`}>
        {
            newsList?.map(news => {
                return <NewsCard key={news.id} {...news}/>
            })
        }
    </div>
}