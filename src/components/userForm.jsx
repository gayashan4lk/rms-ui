import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function UserForm({ propsData }) {
  const { data, setData } = useState({});
  const { register, handleSubmit } = useForm();

  const onFormSubmit = (data) => {
    console.log(data);

    // below method is working
    axios.post('http://localhost:5099/api/Candidates/create', data).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const onErrors = (errors) => {
    console.log(errors);
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit, onErrors)} method="post">
      <div className="form-group">
        <label htmlFor="name">User Name</label>
        <input
          type="text"
          name="name"
          {...register('name')}
          id="name"
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
    </form>
  );
}

export default UserForm;
