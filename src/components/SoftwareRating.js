import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { createReview, getReviews } from '../state/actions/reviewAction';

const SoftwareRating = ({id}) => {
    const [headline, setHeadline] = useState('');
    const [content, setContent] = useState('');
    const [rating, setRating] = useState(1);

    const dispatch = useDispatch();

    const reviews = useSelector(state => state.softwareReviews.reviews)
    const user = useSelector(state => state.currentUser.user)

   const submitReview = (e) => {
       e.preventDefault()
        const data = {
            rating,
            headline,
            content,
            softwareId: id,
            userId: user.id
        }

        dispatch(createReview(data))
        setHeadline('')
        setContent('')
        setRating(1)
   } 

   useEffect(() => {
        dispatch(getReviews(id))
   },[])

    return (
        <div className="card fp-card mt-3">
            <div className="card-body p-3 py-0 px-2">
            <h4 className="text-muted mt-2 mb-2">Review This Software</h4>
            <hr />
            {/* <div className="alert alert-warning alert-dismissible" role="alert" v-if="showErrorAlert">
                <strong>Error</strong>
                <button type="button" className="btn-close"></button>
            </div> */}
            <form onSubmit={submitReview}>
                <div className="row">
                <div className="col-md-4">
                    <label className="form-label">Rating Number (1-10)</label>
                    <input className="form-control form-control-sm" max={10} min={1} type="Number" value={rating} onChange={(e) => setRating(e.target.value)} required/>
                </div>
                <div className="col-md-8">
                    <label className="form-label">Review Headline</label>
                    <input className="form-control" type="text" value={headline} onChange={(e) => setHeadline(e.target.value)} required/>
                </div>
                </div>
                <div>
                <label className="form-label">Review Text</label>
                <textarea className="form-control" value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
                </div>

                <button className="btn btn-dark review-button my-3">
                    Submit Review
                </button>
            </form>
            <h5 className="text-muted mt-2 mb-2">User Reviews</h5>
            <hr />

            {reviews ? <div className="row">
                <div className="col-md-12">
                {reviews.map((review) => {
                    return (
                        <div className="card p-2 mb-2 px-2" key={review._id}>
                            <h4>
                            <span style={{color: '#efc218'}}>&#9733;</span>
                                {review.rating}/10 - {review.headline}
                            </h4>
                            <p> {review.content} </p>
                            <span style={{fontSize: '12px'}}>
                                {review.createdAt}
                            </span>
                        </div>
                    )
                }) }
                
                </div>
            </div> : <center>No Review Yet...</center> }
            {/*  loop end  */}
            </div>
        </div>
    )
}

export default SoftwareRating