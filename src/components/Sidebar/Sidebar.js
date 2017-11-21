import React from 'react';
import Money from '../Money/Money';
import { NavLink } from 'react-router-dom';

import './Sidebar.css';

export default ({ accounts }) => {
  return (
    <div className='Sidebar'>
      <div className='Sidebar__header'>
        Счета
      </div>
      {Object.keys(accounts).map((id) => (
        <NavLink key = {id} to={'/account/' + id} className='Link' activeClassName='Link--active'>
          <div className='Sidebar__account'>
            <div className='Sidebar__account-name'>
              {accounts[id].name}
            </div>
            <div className='Sidebar__account-amount'>
              <Money value={accounts[id].amount} currency={accounts[id].currency} />
            </div>
          </div>
        </NavLink>
      )
      )}

      <NavLink to='/create-account' className='Link' activeClassName='Link--active'>
        <div className='Sidebar__account'>
          <div className='Sidebar__account-name'>
            Добавить счет
          </div>
        </div>
      </NavLink>

      <NavLink to='/about' className='Link' activeClassName='Link--active'>
        <div className='Sidebar__account'>
          <div className='Sidebar__account-name'>
            About
          </div>
        </div>
      </NavLink>
    </div>
  );
};
