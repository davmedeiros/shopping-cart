const ShowCase = () => {
  // TODO: Replace items with the ones fetched from the API
  const items = [
    {
      id: 1,
      name: 'Apple',
      price: 1.14,
    },
    {
      id: 2,
      name: 'Banana',
      price: 1.42,
    },
    {
      id: 3,
      name: 'Mango',
      price: 3.06,
    },
  ];

  return (
    <div className="showcase">
      {items.map((item) => (
        <div className="item" key={item.id}>
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowCase;
