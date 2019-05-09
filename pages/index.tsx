import * as Next from 'next';
import Link from 'next/link';
import {getUsers} from '../rest-api/github';
import {User} from '../model/user';
import {Table} from '../components/users';

interface Props {
  users: User[];
}

const Index: Next.NextFunctionComponent<Props> = (props) => (
  <div>
    <p>Hello Next</p>
    <Table users={props.users}/>
    <Link href="/user-info">
      <a>Navigate to User info</a>
    </Link>
  </div>
);

// este método la primera vez lo ejecuta en servidor y la segunda en cliente
Index.getInitialProps = async() => {
    const users = await getUsers();
    console.log(users);

    return{
        users,
    }
}

export default Index;
