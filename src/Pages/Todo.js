import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input, Button, List, Card } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

export default function Todo() {
  const initArray = {
    name: 'Народить котиков',
    description:
      'Народить много котиков всех пород, чтобы создать армию и устроить геноцид!'
  };

  const [todos, setTodo] = useState([initArray]);
  const [change, setChange] = useState({ isChanging: false, index: null });

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => setTodo([...todos, data]);
  const changeSubmit = data => {
    let changingObj = data
    console.log(changingObj)
    let oldArray = todos;
    oldArray[change.index] = changingObj
    setTodo([...oldArray]);
    let changeObj = {
      isChanging: false,
      index: null
    }
    setChange(changeObj)
  }

  const del = index => {
    let oldArray = [todos];
    oldArray.splice(index, 1);
    setTodo([...oldArray]);
  }
  const startChange = index => {
    let changeObj = {
      isChanging: true,
      index: index
    }
    setChange(changeObj)
  }
  return (
    <div>
      <br />
      <h1 style={{ textAlign: 'center' }}>Todo app</h1>
      <Card>
        <List
          header="Tasks"
          dataSource={todos}
          renderItem={(todo, index) => (
            <List.Item actions={[<Button onClick={() => del(index)}>Delete</Button>, <Button onClick={() => startChange(index)}>Edit</Button>]}>
              {change.isChanging ? <form onSubmit={handleSubmit(changeSubmit)}>
          <Input
            {...register("name")}
            type="text"
            required
            name="name"
            placeholder="name"
          />
          <Input
            {...register("description")}
            type="text"
            required
            name="description"
            placeholder="description"
          />
          <input type="submit"/>
        </form> : <List.Item.Meta title={todo.name} description={todo.description} />}
            </List.Item>
          )}
        />
      </Card>
      <div style={{ padding: '15px' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("name")}
            type="text"
            required
            name="name"
            placeholder="name"
          />
          <Input
            {...register("description")}
            type="text"
            required
            name="description"
            placeholder="description"
          />
          <input style={{ width: '100%' }} type="submit" />
        </form>
        <br />
        <Button style={{ width: '100%' }} onClick={() => setTodo([])}>Clear</Button>
      </div>
    </div>
  );
}
