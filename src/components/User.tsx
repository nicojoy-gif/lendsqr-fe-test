
import UserComponent from './UserComponent'
import icon from '../assets/icon.svg'
import icon1 from '../assets/icon (1).svg'
import icon2 from '../assets/icon (2).svg'
import icon3 from '../assets/icon (3).svg'


const User = () => {
  return (
    <div>
        <h2 className='user-header'>Users</h2>
        <div className='user-box'>
<section className='main-user'>
<UserComponent iconSrc={icon} title="USERS" count={2453} />

<UserComponent iconSrc={icon1} title="ACTIVE USERS" count={2453} />

<UserComponent iconSrc={icon2} title="USERS WITH LOANS" count={12453} />

<UserComponent iconSrc={icon3} title="USERS WITH SAVINGS" count={102453} />
</section>
        </div>
    </div>
  )
}

export default User