import { useState } from 'react';
import '../styles/main.scss';

function Modal({ closeModal }: { closeModal: () => void }) {
  const [formData, setFormData] = useState<any>({});

  const handleReset = () => {
    // Reset form data
    setFormData({});
    // Close the modal
    closeModal();
  };

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
  return (
    <div>
        <div className="modal-content">
            <form onSubmit={handleSubmit} >
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
  )
}

export default Modal