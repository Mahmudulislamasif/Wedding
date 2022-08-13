import React from 'react';

const Features = () => {
    return (
        <div className="container">
            <h1 className="m-4">Features</h1>
            <div className="row row-cols-1 row-cols-lg-3 border border-dark rounded-3">
                 <div className="col">
                       <div>
                        <h3>Create your card
                            in just 5 mins</h3></div>
                 </div>
                 <div className="col">
                       <div>
                        <h3>Customize the Text with "Edit this Page" Option</h3>
                       </div>
                 </div>
                 <div className="col">
                       <div>
                        <h3>Editing is available
                            after purchase also</h3>
                       </div>
                 </div>
            </div>
        </div>
    );
};

export default Features;