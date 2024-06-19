// UsersTable.tsx
import { UserProps } from '../../utils/types';
import DataTable from '../common/table';

interface Props {
    users: UserProps[] | null;
    loading?: boolean;
}

const UsersTable = ({ users }: Props) => {
    const columns = [
        { key: 'orgName', header: 'Organization', isSortable: true },
        { key: 'userName', header: 'Username', isSortable: true },
        { key: 'email', header: 'Email', isSortable: true },
        { key: 'phoneNumber', header: 'Phone number', isSortable: true },
        { key: 'createdAt', header: 'Date joined', isSortable: true },
        { key: 'status', header: 'Status', isSortable: true },
    ];

    return (
        <div className='users-table'>
            <DataTable columns={columns} rows={users} />
        </div>
    );
};

export default UsersTable;
