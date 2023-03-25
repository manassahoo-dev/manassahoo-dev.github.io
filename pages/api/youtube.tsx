const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' },
];

export default function handler(req, res) {
  const { query, method } = req;

  switch (method) {
    case 'GET':
      if (query.id) {
        handleGetUserById(req, res);
      } else if (query.search) {
        handleSearchUsers(req, res);
      } else {
        handleGetAllUsers(req, res);
      }
      break;
    default:
      res.status(405).json({ message: 'Method not allowed' });
  }
}

function handleGetAllUsers(req, res) {
  res.status(200).json(users);
}

function handleGetUserById(req, res) {
  const { query } = req;
  const { id } = query;
  const user = users.find((user) => user.id === parseInt(id));
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
}

function handleSearchUsers(req, res) {
  const { query } = req;
  const { id } = query;
  const user = users.find((user) => user.id === parseInt(id));
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
}
