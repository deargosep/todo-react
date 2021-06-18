import React, { useState } from 'react';
import { Input, Button, List, Card } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

export default function App() {
  const [todos, setTodo] = useState([
    {
      name: 'Народить котиков',
      description:
        'Народить много котиков всех пород, чтобы создать армию и устроить геноцид!'
    }
  ]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  function createTodo(e) {
    e.preventDefault();
    setTodo([...todos, { name: name, description: description }]);
    setName('');
    setDescription('');
  }
  function handleName(e) {
    setName(e.target.value);
  }
  function handleDescription(e) {
    setDescription(e.target.value);
  }
  function del(index) {
    var array = [...todos]; // make a separate copy of the array
    if (index !== -1) {
      array.splice(index, 1);
      setTodo(array);
    }
  }
  function clear() {
    setTodo([])
  }
  return (
    <div>
      <br/>
      <h1 style={{textAlign: 'center'}}>Todo app</h1>
      <Card>
        <List
        header="Tasks"
          dataSource={todos}
          renderItem={(todo, index) => (
            <List.Item actions={[<Button onClick={() => del(index)}>Delete</Button>]}>
            <List.Item.Meta title={todo.name} description={todo.description} />
            </List.Item>
          )}
        />
      </Card>
      <div style={{padding: '15px'}}>
        <form onSubmit={createTodo}>
          <Input
            type="text"
            required
            onChange={handleName}
            name="name"
            value={name}
            placeholder="name"
          />
          <Input
            type="text"
            onChange={handleDescription}
            required
            name="description"
            value={description}
            placeholder="description"
          />
          <input style={{width: '100%'}} type="submit" />
        </form>
        <br/>
        <Button style={{width: '100%'}} onClick={clear}>Clear</Button>
        </div>
    </div>
  );
}
