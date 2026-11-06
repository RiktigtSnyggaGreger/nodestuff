import './App.css';
import React, { useEffect } from 'react';
import axios from 'axios';
import EmployeeList from './components/EmployeeList.js';
import SearchBar from './components/SearchBar.js';


function App() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [employees, setEmployees] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setEmployees([])
      return;
    }
    
    const fetchEmployees = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`http://localhost:8000/api.php?search=${searchTerm}`);
        setEmployees(response.data);
      } catch (err) {
        setError('Failed to fetch employees');
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, [searchTerm]);


  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Employee Search</h1>
      {/* Sökfält */}
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />

      {/* Laddningsindikator */}
      {loading && <p>Loading...</p>}

      {/* Felmeddelande */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Filtrerad lista */}
      <EmployeeList employees={employees} />
    </div>
  );

}

export default App;
