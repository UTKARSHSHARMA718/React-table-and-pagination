import React, { useEffect, useState } from 'react'
import './Table.css';
import data from './MOCK_DATA.json';
import ReactPaginate from 'react-paginate';
import SearchBar from '../SearchBar/SearchBar';
import { FormControl, FormControlLabel, Switch } from '@mui/material';

const allUsers = data.slice(0, 100);

const Table = () => {
    const [users, setUsers] = useState(allUsers);

    const [search, setSearch] = useState('');
    const [disable, setDisable] = useState([]);
    const onHandleDisable = (user) => {

        if (!disable.includes(user)) {
            setDisable([...disable, user]);
            console.log(disable)
            return;
        }

        const disableUsers = disable.filter((userEle) => {
            return userEle !== user;
        })
        setDisable(disableUsers);
        console.log(disable)

    }

    const [pageNumber, setPageNumber] = useState(0);
    const userPerPage = 10;
    const pagesVisited = pageNumber * userPerPage;
    const pageCount = Math.ceil(users.length / userPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    const onHandleUserSearch = (event) => {

        const valueToSearch = event.target.value;
        setSearch(valueToSearch);
        if (valueToSearch.trim().length === 0) {
            setUsers(allUsers);
            return;
        }

        const searchedUsers = allUsers.filter((user) => {
            return user.first_name.toLowerCase().startsWith(valueToSearch.toLowerCase());
        })
        setUsers(searchedUsers);
    }

    // useEffect(() => {
    //     onHandleUserSearch();
    // }, [search]);

    console.log(users);
    return (
        <>
            <div className='table-container'>
                <SearchBar onHandleUserSearch={onHandleUserSearch} search={search} setSearch={setSearch} />
                {users.length === 0 ?
                    <p className='no-data-text'>No data</p>
                    : <table class="demo">

                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Age</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            
                                users.slice(pagesVisited, pagesVisited + userPerPage).map((user, index) => {
                                    return (
                                        <tr key={index} className={disable.includes(user.email) ? 'disable-row' : 'enable-row'}>
                                            <td>{user.first_name}</td>
                                            <td>{user.last_name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.age}</td>
                                            <td>{
                                                <FormControlLabel
                                                    label={disable.includes(user.email) ? 'Disable' : 'Enable'}
                                                    control={<Switch
                                                        checked={disable.includes(user.email) ? false : true}
                                                        onChange={() => onHandleDisable(user.email)}
                                                    />}
                                                />
                                            }</td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>}

                <ReactPaginate
                    className={users.length === 0 ? 'hidden-btn' : ''}
                    previousLabel={"Prev"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={`paginationBttns`}
                    previousClassName={`previousBttn ${pageNumber === 0 ? 'disable-btn' : ''}`}
                    nextLinkClassName={`nextBttn ${pageNumber === pageCount - 1 ? 'disable-btn' : ''}`}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />
            </div>
        </>
    )
}

export default Table