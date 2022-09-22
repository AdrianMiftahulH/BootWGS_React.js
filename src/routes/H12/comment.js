import { faker } from '@faker-js/faker';
import './comment.css';
import React from "react"

// ===== Hari 12 Belajar React JS =====
// ===== Hari 13 Belajar dari function ke class =====

// == Menambahkan data ==
const accs = [
    {
        id: 1, name:'Adrian',
        date: '10 September 2022',
        comment:'Lorem ipsum dolor sit amet!',
        image: faker.image.avatar()
    },
    {
        id: 2, 
        name:'Adriana',
        date: '10 September 2022',
        comment:'Lorem ipsum dolor sit amet consectetur adipisicing',
        image:faker.image.cats()
    },
    {
        id: 3,
        name:'Adrianarr',
        date: '11 September 2022',
        comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, quia.',
        image:faker.image.animals()
    },
    {
        id: 4,
        name:'Eva',
        date: '15 September 2022',
        comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quae maiores error numquam.',
        image:faker.image.sports()
    },
    {
        id: 5,
        name:'Fitri',
        date: '16 September 2022',
        comment:'Lorem ',
        image:faker.image.nature()
    }
];

// Membuuat class comment
class Comment extends React.Component {
    render(){
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
                ))}
            </div>
        )
    }
}

// Export class comment
export default Comment;