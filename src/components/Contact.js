import React from 'react';

const Contact = () => {
  return(
    <React.Fragment>
      <div className="container">
        <div className="row mt-5 mb-5">
          <div className="col-lg-8 col-md-12 col-12 mx-lg-auto">
            <div className="card">
              <div className="card-body">
                <form>
                  <div className="col-lg-12 mb-4">
                    <div className="form-group">
                      <label>Name: </label>
                      <input type="text" className="form-control form-control-lg" />
                    </div>
                  </div>

                  <div className="col-lg-12 mb-4">
                    <div className="form-group">
                      <label>Email: </label>
                      <input type="email" className="form-control form-control-lg" />
                    </div>
                  </div>

                  <div className="col-lg-12 mb-4">
                    <div className="form-group">
                      <label>Contact: </label>
                      <input type="text" className="form-control form-control-lg" />
                    </div>
                  </div>

                  <div className="col-lg-12 mb-4">
                    <div className="form-group">
                      <label>Message: </label>
                      <textarea className="form-control form-control-lg" rows="8"></textarea>
                    </div>
                  </div>

                  <div className="col-lg-12 mb-4">
                    <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) 
}

export default Contact;
