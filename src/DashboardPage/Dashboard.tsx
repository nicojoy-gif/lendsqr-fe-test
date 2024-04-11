import { useState, useEffect } from 'react';
import { MdFilterList } from 'react-icons/md';
import TopNav from '../components/TopNav';
import SideNav from '../components/SideNav';
import User from '../components/User';
import '../styles/main.scss';
import jsonData from './generated.json'; // Import the JSON file
import Modal from '../components/Modal';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';


const Dashboard = () => {
  // State to hold table data and pagination settings
  const [tableData, setTableData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Number of items per page
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setTableData(jsonData);
  }, []); 
  const handleSelectChange = (value: any) => {
    // Update the state with the selected value
    setItemsPerPage(parseInt(value));
  };
  
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
            {/* Pagination controls */}
          <div className="pagination">
            <div>
              <p> Showing <select onChange={(e) => handleSelectChange(e.target.value)}>
    <option value="10">10</option>
    <option value="20">20</option>
    <option value="50">50</option>
    <option value="100">100</option>
  </select> out of 100</p>
              
            </div>
            {/* Pagination icons */}
            <div className='pagination-icon'>
              <button onClick={previousPage} disabled={currentPage === 1}>
                <FaAngleLeft color='rgba(33, 63, 125, 1)'/>
              </button>
              <div className="page-numbers">
                {/* Page numbers */}
                {pageNumbers.map((number, index) => {
                  if (number === 1 || number === totalPages || (number >= currentPage - 1 && number <= currentPage + 1)) {
                    return (
                      <span key={number} className={number === currentPage ? 'active' : ''} onClick={() => setCurrentPage(number)}>
                        {number}{'  '}{/* Add a space after each number */}
                      </span>
                    );
                  } else if (index === 1 || index === 2 || index === 3 || index === pageNumbers.length - 2) {
                    return <span key={number}>...</span>;
                  }
                  return null;
                })}
              </div>
              <button onClick={nextPage} disabled={currentPage === totalPages}>
                <FaAngleRight color='rgba(33, 63, 125, 1)'/>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
    {/* Modal */}
      {/* Modal */}
      {showModal && (
        <div className="modal">
          <Modal closeModal={() => setShowModal(false)} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
