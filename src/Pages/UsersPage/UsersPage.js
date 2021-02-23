import { useEffect } from 'react';

import { connect } from 'react-redux';

import {
  fetchUsers,
  deleteUser,
  addUser,
  editUser,
} from '../../Redux/users/users.actions';

import HeaderNavBar from '../../Components/HeaderNavBar/HeaderNavBar';
import CardListUsers from '../../Components/Users/CardListUsers/CardListUsers';

const UsersPage = ({ fetchUsers, deleteUser, addUser, editUser, users }) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div>
      <HeaderNavBar />
      <CardListUsers
        data={users}
        deleteItem={deleteUser}
        addItem={addUser}
        editItem={editUser}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.usersReducer.users,
});

const mapDispatchToProps = {
  fetchUsers,
  deleteUser,
  addUser,
  editUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
