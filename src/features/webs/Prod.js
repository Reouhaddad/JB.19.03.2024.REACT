import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProdAsync, deleteProdAsync, getProdsAsync, selectProds, updDataAsync } from './prodSlice';
import { selectlogged } from './loginSlice';
export const Prod = () => {

  // const MY_SERVER = "https://jb-17-03-2024-dj-1.onrender.com/static";
  const MY_SERVER1 = "http://127.0.0.1:8000/static";
  const prods = useSelector(selectProds);
  const logged = useSelector(selectlogged);
  const dispatch = useDispatch();
  const [refresh, setRefresh] = useState(false);
  const [name, setName] = useState("");
  const [category, setcategory] = useState(1);
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(null); // Utilisez null au lieu d'une chaîne vide
  const [filteredCategory, setFilteredCategory] = useState(null);
  useEffect(() => {
    dispatch(getProdsAsync());
    console.log(prods);
  }, [refresh]);

  const handelDel = (id) => {
    dispatch(deleteProdAsync(id));
    setRefresh(!refresh);
  }

  const handleAddProd = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('image', image);
    formData.append('category', category);

    dispatch(addProdAsync(formData));
  }

  const filterByCategory = (category) => {
    setFilteredCategory(category);
  };

  const clearFilter = () => {
    setFilteredCategory(null);
  };

  return (
    <div className="container mt-5">
      {logged && (
        <div className="row mt-5 add-product">
          <div className="col-md-4">
            <h2 className="mb-4">Add Product</h2>
            <hr></hr>
            name: <input onChange={(e) => setName(e.target.value)} />
            price: <input onChange={(e) => setPrice(e.target.value)} />
            image: <input type='file' onChange={(e) => setImage(e.target.files[0])} />
            category: <select value={category} placeholder="Category" onChange={(e) => setcategory(e.target.value)} className="form-select mb-3" style={{ padding: '5px' }}>
              <option value="null" disabled>Category Selection</option>
              <option value="1">Dairy</option>
              <option value="2">Bakery</option>
            </select>
            <button className='btn btn-primary' onClick={handleAddProd}>add - admin</button>
          </div>
        </div>
      )}
      <hr />
      Items - {prods.length}
      <div className="row">
        <div className="col-md-12 mb-4">
          <div className="btn-group">
            <button className={`btn btn-outline-secondary ${filteredCategory === null ? 'active' : ''}`} onClick={clearFilter}>All</button>
            <button className={`btn btn-outline-secondary ${filteredCategory === 1 ? 'active' : ''}`} onClick={() => filterByCategory(1)}>Dairy</button>
            <button className={`btn btn-outline-secondary ${filteredCategory === 2 ? 'active' : ''}`} onClick={() => filterByCategory(2)}>Bakery</button>
          </div>
        </div>
        {prods
          .filter((prod) => filteredCategory === null || prod.category === filteredCategory)
          .map(prod => (
            <div key={prod.id} className="col-md-2 mb-4"> {/* Modifier la classe ici */}
              <div className="card" style={{ border: '1px solid black', borderRadius: '10px', padding: '10px' }}>
                {prod.image ? (
                  <img src={MY_SERVER1 + prod.image} className="card-img-top img-fluid" alt={prod.name} style={{ height: '150px', objectFit: 'cover' }} />
                ) : (
                  // Si aucune image n'est définie, utilisez une image par défaut
                  <img src="https://picsum.photos/200" className="card-img-top" alt="." style={{ maxWidth: "163px", maxHeight: "163px" }} />
                )}
                <div className="card-body">
                  <h5 className="card-title">{prod.name}</h5>
                  <p className="card-text">Only {prod.price}</p>
                  <button className='btn btn-primary'>Buy</button>
                  <button className='btn btn-danger' onClick={() => handelDel(prod.id)}>Remove</button>
                </div>
                <img src={MY_SERVER1 + '/static/images/tranches-pain-ail-herbes_1mYqK2t'} className="card-img-top" alt="" />
              </div>
              
            </div>))}

      </div>
    </div>
  )
}
