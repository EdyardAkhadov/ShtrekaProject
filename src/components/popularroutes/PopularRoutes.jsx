import React, { useState } from 'react'
import styles from '/src/styles/PopularRoutes.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../redux/slices/post'

export default function PopularStation() {

  const dispatch = useDispatch();
  const {posts} = useSelector(state => state.posts);

 const isPostsLoading = posts.status === 'loading';

  React.useEffect(()=>{
    dispatch(fetchPosts())
  }, [])

  console.log(posts)

  return (
    <div>
        <div className={styles.PopularStationContainer}>
            <h2 className={styles.PopularStationHeader}>Розклад станції </h2>
            {(isPostsLoading ? [undefined] : posts.items).map((obj, index) => isPostsLoading ? (<p >Розклад, на жаль, не працює!</p> ):( <p>{obj.title}</p> ) )}
        </div>
    </div>
  )
}
