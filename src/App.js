import React, { useState } from 'react';
import { Input, List, Card } from 'antd';
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
  }
  function handleName(e) {
    setName(e.target.value);
  }
  function handleDescription(e) {
    setDescription(e.target.value);
  }
  return (
    <div>
      <br/>
      <h1 style={{textAlign: 'center'}}>Todo app</h1>
      <Card>
        <List
          dataSource={todos}
          renderItem={todo => (
            <List.Item>
            <List.Item.Meta title={todo.name} description={todo.description} />
            </List.Item>
          )}
        />
      </Card>
      <Card>
        <form onSubmit={createTodo}>
          <Input
            type="text"
            onChange={handleName}
            name="name"
            placeholder="name"
          />
          <Input
            type="text"
            onChange={handleDescription}
            name="description"
            placeholder="description"
          />
          <input type="submit" />
        </form>
      </Card>
    </div>
  );
}
