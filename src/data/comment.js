import { faker } from '@faker-js/faker'; 


// == Menambahkan data ==
const DataComment = [
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

export default DataComment;