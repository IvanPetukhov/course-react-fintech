import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Money from '../Money/Money';

import {
  NavLink
} from 'react-router-dom';

import './Sidebar.css';

const Sidebar = ({ accounts, operations }) => {
  const accountKeys = Object.keys(accounts);

  return (
    <div className='Sidebar'>
      <div className='Sidebar__header'>
        Счета
      </div>

      {accountKeys.map(key => {
        const account = accounts[key];
        const sum = Object.keys(operations).reduce(
          (opSum, current) => {
            if (operations[current].account === key && !isNaN(parseFloat(operations[current].amount))) {
              opSum += parseFloat(operations[current].amount);
            }
            return opSum;
          }, 0);

        return (
          <NavLink key={key} to={`/account/${key}`} className='Link' activeClassName='Link--active'>
            <div className='Sidebar__account'>
              <div className='Sidebar__account-name'>
                {account.name}
              </div>
              <div className='Sidebar__account-amount'>
                <Money value={sum} currency={account.currency} />
              </div>
            </div>
          </NavLink>
        );
      })}

      <NavLink to='/create-account' className='Link' activeClassName='Link--active'>
        <div className='Sidebar__account'>
          <div className='Sidebar__account-name'>
            Добавить счет
          </div>
        </div>
      </NavLink>
    </div>
  );
};

Sidebar.defaultProps = {
  accounts: {}
};

const mapStateToProps = ({accounts, operations}) => ({
  accounts,
  operations
});


export default withRouter(connect(mapStateToProps)(Sidebar));
