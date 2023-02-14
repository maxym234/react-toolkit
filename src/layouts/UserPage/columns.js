import { Text } from "./style";
import { Button } from "../../ui/Button";
import { ModalComponent } from "./components/Modal";
export const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        // responsive: ['md'],
      },
      {
        title: 'User Name',
        dataIndex: 'username',
        key: 'username',
        render: username => (
          <p>{username}</p>
        ),
        responsive: ['md'],
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
        render: phone => <p>{phone}</p>,
      },
      {
        title: 'Website',
        dataIndex: 'website',
        key: 'website',
        render: website => <p>{website}</p>,
      },
      {
        title: 'email',
        dataIndex: 'email',
        key: 'email',
        render: email => <p>{email}</p>,
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        render: address => <>
            <Text>City: <p>{address?.city}</p></Text>
            <Text>Street: <p>{address?.street}</p></Text>
            <Text>Suite: <p>{address?.suite}</p></Text>
            <Text>Zip-code: <p>{address?.zipcode}</p></Text>
          </>,
        responsive: ['md'],
      },
      {
        title: 'Company',
        dataIndex: 'company',
        key: 'company',
        render: company => <>
          <Text>BS: <p>{company?.bs}</p></Text>
          <Text>CatchPhrase: <p>{company?.catchPhrase}</p></Text>
          <Text>Name: <p>{company?.name}</p></Text>
        </>,
        // ellipsis: true,
        responsive: ['md'],
      },
      {
        title: 'Posts Buttons',
        key: 'x',
        render: (_, record) => {
          return (
            <a target="_blank" href={`/posts?userId=${record?.id}`} rel="noreferrer">
              <Button>Posts</Button>
            </a>
          );
        },
      },
      {
        title: 'Albums Buttons',
        key: 'x',
        render: (_, record) => {
          return (
              <ModalComponent userId={record?.id}/>            
          );
        },
      },
];