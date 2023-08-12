import React from 'react'

const ReviewsList = ({ reviewsResults }) => {
    return (
        <div className="accordion" id="accordionExample" >
            {reviewsResults.map(review => {
                return (
                    <div className="accordion-item" key={review.id}>
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        {review.author}
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        {review.content}
      </div>
    </div>
    </div>
                )
            })}
        </div>
    )
}

export default ReviewsList