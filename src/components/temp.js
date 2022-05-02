<form onSubmit={handleSubmit(onFormSubmit, onErrors)} method="post">
  <div className="form-group">
    <label htmlFor="name">User Name</label>
    <input
      type="text"
      name="name"
      {...register('name')}
      className="form-control"
      placeholder="Enter your name"
    />
  </div>
  <div className="form-group">
    <label htmlFor="phoneNumber">Mobile Number</label>
    <input
      type="text"
      name="phoneNumber"
      {...register('phoneNumber')}
      id="phoneNumber"
      className="form-control"
      placeholder="Enter your mobile number"
    />
  </div>
  <div className="form-group">
    <label htmlFor="comment">Comments</label>
    <textarea
      name="comment"
      {...register('comment')}
      id="comment"
      className="form-control"
      cols="30"
      rows="6"
    />
  </div>
  <button type="submit" className="btn btn-primary" value="submit">
    Submit
  </button>
</form>;
