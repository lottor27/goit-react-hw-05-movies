import { nanoid } from 'nanoid'
import React from 'react'


const ReviewsList = ({ reviewsResults }) => {
  


    return (
        <div className="accordion" id="accordionExample" >
        {reviewsResults.map(review => {
          const colapsId = nanoid();
            const check = `#${colapsId}`;
                return (
                  <div className="accordion-item" key={review.id}>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={check}
                        aria-expanded="true"
                        aria-controls={colapsId}
                      >
                        {review.author}
                      </button>
                    </h2>
                    <div
                      id={colapsId}
                      className="accordion-collapse collapse hide"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">{review.content}</div>
                    </div>
                  </div>
                );
            })}
        </div>
    )
}

export default ReviewsList