import { faker } from '@faker-js/faker';
import './comment.css';

// Hari 11 Belajar React JS
const Comment = () => {
    const accs = [
        {id: 1, name:'Adrian', date: '12 Maret 2021', comment:'Lorem ipsum dolor sit amet!', image: faker.image.avatar()},
        {id: 2, name:'Adriana', date: '12 Maret 2021', comment:'Lorem ipsum dolor sit amet consectetur adipisicing', image:faker.image.avatar()},
        {id: 3, name:'Adrianarr', date: '12 Maret 2021', comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, quia.', image:faker.image.avatar()}
    ];

    return (
        <div className="cont-comment" id="comment">
            <h1><center>Comment</center></h1>
            {accs.map((acc) =>(
            <div key={acc.id}>
            <div className="ui container comments">
                <div className="comment">
                    <a href="/" className="avatar">
                        <img alt="avatar" src={acc.image} />
                    </a>
                    <div className="content">
                        <a href="/" className="author">
                            {acc.name}
                        </a>
                        <div className="metadata">
                            <span className="date">{acc.date}</span>
                        </div>
                        <div className="text">{acc.comment}</div>
                    </div>
                </div>
            </div>
        </div>
        ))}</div>
    )
}

export default Comment;