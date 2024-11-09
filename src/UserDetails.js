import React from 'react';

const UserDetails = ({ user }) => {
  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">User Details</h1>
      <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: '600px' }}>
        
        <div className="d-flex mb-3">
          <h5><span className="text-muted">ID:</span> #{user.id}</h5>
          <h5 className='ms-2'>{user.name}</h5>
        </div>
        
        <div className="row g-3 mb-3">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" id="name" className="form-control" value={user.name} readOnly />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" className="form-control" value={user.email} readOnly />
          </div>
        </div>
        <div className="row g-3 mb-3">
          <div className="col-md-6">
            <h6>Address</h6>
            <label htmlFor="street" className="form-label">Street</label>
            <input type="text" id="street" className="form-control" value={user.address.street} readOnly />
          </div>
          <div className="col-md-6">
            <label htmlFor="suite" className="form-label mt-4">Suite</label>
            <input type="text" id="suite" className="form-control" value={user.address.suite} readOnly />
          </div>
        </div>

        <div className="row g-3 mb-3">
          <div className="col-md-6">
            <label htmlFor="city" className="form-label">City</label>
            <input type="text" id="city" className="form-control" value={user.address.city} readOnly />
          </div>
          <div className="col-md-6">
            <label htmlFor="zip" className="form-label">Zip Code</label>
            <input type="text" id="zip" className="form-control" value={user.address.zipcode} readOnly />
          </div>
        </div>

        <div className="row g-3 mb-3">
          <div className="col-md-6">
            <label htmlFor="phone" className="form-label">Phone No</label>
            <input type="tel" id="phone" className="form-control" value={user.phone} readOnly />
          </div>
          <div className="col-md-6">
            <label htmlFor="web" className="form-label">Website</label>
            <input type="url" id="web" className="form-control" value={user.website} readOnly />
          </div>
        </div>

        <div className="row g-3 mb-3">
          <div className="col-md-6">
            <h6>Company</h6>
            <label htmlFor="cname" className="form-label">Name</label>
            <input type="text" id="cname" className="form-control" value={user.company.name} readOnly />
          </div>
          <div className="col-md-6">
            <label htmlFor="catch" className="form-label mt-4">Catch Phrase</label>
            <input type="text" id="catch" className="form-control" value={user.company.catchPhrase} readOnly />
          </div>
        </div>

        <div className="text-center">
          <button className="btn btn-primary px-5 py-2">Update</button>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
