import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
    return (
			<div class="container mt-5">
				<div class="row d-flex justify-content-between align-items-center">
					<div class="col-12 col-lg-4 col-md-5">
						<div class="offer-img mb-30-sm">
							<img src="special.png" alt="" />
						</div>
					</div>
					<div class="col-12 col-lg-7 col-md-6 ml-auto">
						<div class="offer-content">
							<h1 class="section-heading"><span class="pink_clr">Special</span> Training Program</h1>
							<h1>Get 50% OFF</h1>
							<p>Grab now for 50% off. It is a special trainning program which will be start from next month</p>
						</div>
                        <button className='btn btn-info'><Link className='text-decoration-none text-white' to='/register'>Register</Link></button>
					</div>
				</div>
			</div>
    );
};

export default Gallery;