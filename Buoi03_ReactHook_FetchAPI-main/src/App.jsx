import { useState } from 'react'
import './App.css'
import UserForm from './Buoi03/Bai1/UserForm';
import DigitalClock from './Buoi03/Bai2/DigitalClock';
import ProductFilter from './Buoi03/Bai3/ProductFilter';
import TodoApp from './Buoi03/Bai4/TodoApp';
import UsersList from './Buoi04/Bai1/UsersList';
import UsersLoading from './Buoi04/Bai2/UsersLoading';
import UserById from './Buoi04/Bai3/UserById';
import PostSearch from './Buoi04/Bai4/PostSearch';

function App() {

  return (
    <>
      <h2>Buổi 3</h2>
      <UserForm />
      <br />
      <DigitalClock />
      <br />
      <ProductFilter />
      <br />
      <TodoApp />

      <h2>Buổi 4</h2>
      <UsersList />
      <hr />
      <UsersLoading />
      <hr />
      <UserById />
      <hr />
      <PostSearch />

    </>
  )
}

export default App
