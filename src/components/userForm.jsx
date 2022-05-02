import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function UserForm() {
  const { register, handleSubmit } = useForm();

  const onFormSubmit = (data) => {
    // console.log(data);
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

  return <h1>sdad</h1>;
}

export default UserForm;
