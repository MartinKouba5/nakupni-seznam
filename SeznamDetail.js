import React, { useState } from 'react';

const SeznamDetail = ({ seznam, onBackClick, seznamy, setSeznamy }) => {
  const [items, setItems] = useState(seznam.items);
  const [users, setUsers] = useState(['User1', 'User2']); // Hard-coded seznam uživatelů
  const [newUser, setNewUser] = useState(''); // Stav pro nového uživatele
  const [isDone, setIsDone] = useState(seznam.isDone); // Stav pro označení jako hotové
  const [isArchived, setIsArchived] = useState(seznam.isArchived); // Stav pro archivaci

  const handleItemChange = (event, index) => {
    const newItems = [...items];
    newItems[index].name = event.target.value;
    setItems(newItems);
  };

  const handleQuantityChange = (event, index) => {
    const newItems = [...items];
    newItems[index].quantity = event.target.value;
    setItems(newItems);
  };

  const handleAddItemClick = () => {
    setItems([...items, { name: '', quantity: '' }]);
  };

  const handleAddUserClick = () => {
    setUsers([...users, newUser]);
    setNewUser('');
    alert('Uživatel úspěšně přidán');
  };

  const handleMarkAsDoneClick = () => {
    setIsDone(!isDone);
    console.log(`Označeno jako hotové: ${isDone}`);
  };

  const handleArchiveClick = () => {
    setIsArchived(!isArchived);
    console.log(`Archivováno: ${isArchived}`);
  };

  const handleRemoveClick = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div>
      <button className="btn btn-secondary mb-3" onClick={onBackClick}>Zpět</button>
      <h2>{seznam.title}</h2>
      {items.map((item, index) => (
        <div className="input-group mb-3" key={index}>
          <input type="text" className="form-control" placeholder="Název položky" value={item.name} onChange={(event) => handleItemChange(event, index)} />
          <input type="number" className="form-control" placeholder="Počet kusů" value={item.quantity} onChange={(event) => handleQuantityChange(event, index)} />
          <div className="input-group-append">
            <button className="btn btn-outline-primary" type="button" onClick={handleMarkAsDoneClick}>Hotovo</button>
            <button className="btn btn-outline-danger" type="button" onClick={() => handleRemoveClick(index)}>Odebrat</button>
          </div>
        </div>
      ))}
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary" onClick={handleAddItemClick}>Přidat položku</button></div>
        <div className="d-flex justify-content-center">
        <button className="btn btn-success" onClick={handleMarkAsDoneClick}>Označit jako hotové</button>
        <button className="btn btn-warning" onClick={handleArchiveClick}>Archivovat</button>
        <button className="btn btn-danger" onClick={() => setItems([])}>Smazat položky</button>
      </div>
      <div className="d-flex justify-content-end">
        <input type="text" className="form-control" style={{ width: '200px' }} placeholder="Username" value={newUser} onChange={(event) => setNewUser(event.target.value)} />
        <button className="btn btn-primary" onClick={handleAddUserClick}>Přidat uživatele</button>
      </div>
    </div>
  );
};

export default SeznamDetail;
