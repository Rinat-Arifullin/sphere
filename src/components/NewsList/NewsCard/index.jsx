import './newsCard.css';

export default function NewsCard({
    id,
    short_description,
    raiting,
    link,
    is_valued,
    is_posted,
    title
}){
    return (
            <div className="newsCard">
                <h1>{title}</h1>
                <p>{short_description}</p>
                <div className='toNews'>
                    <a href={link}>GO TO NEWS</a>
                </div>
            </div>
    )

}