import { useState, useEffect } from 'react';
import { MdFilterList } from 'react-icons/md';
import TopNav from '../components/TopNav';
import SideNav from '../components/SideNav';
import User from '../components/User';
import '../styles/main.scss';
import jsonData from './generated.json'; // Import the JSON file


const Dashboard = () => {
  // State to hold table data and pagination settings
  const [tableData, setTableData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Number of items per page
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    // Set the table data when the component mounts
    setTableData(jsonData);
  }, []); // Fetch data on component mount

  // Pagination functions
  const nextPage = () => setCurrentPage(currentPage + 1);
  const previousPage = () => setCurrentPage(currentPage - 1);

  // Calculate indexes for current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total number of pages
  const totalItems = tableData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Modal functions
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here, e.g., apply filters
    console.log('Form submitted with data:', formData);
    closeModal();
  };
  const handleReset = () => {
    // Reset form data
    setFormData({});
  };
  const getStatusColor = (status: string): string => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'rgba(57, 205, 98, 0.2)';
      case 'inactive':
        return 'rgba(84, 95, 125, 0.2)';
      case 'pending':
        return 'rgba(233, 178, 0, 0.2)';
      default:
        return 'rgba(228, 3, 59, 0.2)'; // Default color
    }
  };

  
  const getStatusTextColor = (status: string): string => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'rgba(57, 205, 98, 1)';
      case 'inactive':
        return 'rgba(84, 95, 125, 1)';
      case 'pending':
        return 'rgba(233, 178, 0, 1)';
      default:
        return 'rgba(228, 3, 59, 1)'; // Default color
    }
  };
  return (
    <div>
      <TopNav />
      <div className='dashboard-container'>
        <SideNav />
        <div className='dashboard-box'>
          <section className='main-dashboard'>
            <User />
            <table className='dashboard-table'>
              <thead>
                <tr>
                  <th onClick={openModal}>
                    Organization <MdFilterList  />
                  </th>
                  <th>
                    Username <MdFilterList />
                  </th>
                  <th>
                    Email <MdFilterList />
                  </th>
                  <th>
                    Phone number <MdFilterList />
                  </th>
                  <th>
                    Date joined <MdFilterList />
                  </th>
                  <th>
                    Status <MdFilterList />
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((data, index) => (
                  <tr key={index} className='tableitem'>
                    <td className='organisation'>{data.organization}</td>
                    <td>{data.username}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
                    <td>{data.registered}</td>
                    <td>
  <p style={{ backgroundColor: getStatusColor(data.status), color:getStatusTextColor(data.status) , padding: '3px 14px', borderRadius: '12px', width: '95px' }}>{data.status}</p>
</td>
<td className='sym'>:</td>

                  </tr>
                ))}
              </tbody>
            </table>
            {/* Pagination controls */}
            <div className="pagination">
              <button onClick={previousPage} disabled={currentPage === 1}>Prev</button>
              <div className="page-numbers">
                {pageNumbers.map((number, index) => {
                  if (number === 1 || number === totalPages || (number >= currentPage - 1 && number <= currentPage + 1)) {
                    return (
                      <span key={number} className={number === currentPage ? 'active' : ''} onClick={() => setCurrentPage(number)}>
                        {number}
                      </span>
                    );
                  } else if (index === 1 || index === pageNumbers.length - 2) {
                    return <span key={number}>...</span>;
                  }
                  return null;
                })}
              </div>
              <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
            </div>
          </section>
        </div>
      </div>
      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
            <div className="form-group">
      <label htmlFor="organization">Organization</label>
      <div className="select-wrapper">
        <select id="organization" name="organization" value={formData.organization || ''} >
          <option value="">Select</option>
          <option value="organization1">Organization 1</option>
          <option value="organization2">Organization 2</option>
          {/* Add more options as needed */}
        </select>
      </div>
    </div>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" placeholder='User' value={formData.username || ''} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder='Email' value={formData.email || ''} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone number</label>
                <input type="text" id="phone" name="phone" placeholder='Phone Number' value={formData.phone || ''} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="registered">Date </label>
                <input type="date" id="registered" placeholder='Date' name="registered" value={formData.registered || ''} onChange={handleInputChange} />
              </div>
              <div className="form-group">
      <label htmlFor="organization">Status</label>
      <div className="select-wrapper">
        <select id="organization" name="organization" value={formData.organization || ''} >
          <option value="">Select</option>
          <option value="organization1">Inactive</option>
          <option value="organization2">Active</option>
          {/* Add more options as needed */}
        </select>
      </div>
    </div>
              <div className="button-group">
                <button type="button" onClick={handleReset}>Reset</button>
                <button type="submit" className='filter'>Filter</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
