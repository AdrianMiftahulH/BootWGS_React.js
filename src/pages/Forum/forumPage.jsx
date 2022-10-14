import React from 'react'
import ListComment from '../../components/H13/listComment'
import FormForum from '../../components/H16/form'
import Navigasi from '../../components/partials/nav'
import DataComment from '../../data/comment'

const ForumPage = () => {
    return (
        <>
            <Navigasi />
            <ListComment DataComment={DataComment} />
            <FormForum />
        </>
    )
}

export default ForumPage